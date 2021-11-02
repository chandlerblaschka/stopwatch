    //upgrades 
    //
    var seconds = "00";
    var tens = "00";
    var minutes = "00";
    var lapSeconds = "00";
    var lapTens = "00";
    var lapMinutes = "00";
    var addTens = document.getElementById("tens");
    var addSecs = document.getElementById("sec");
    var addMins = document.getElementById("mins");
    var btnStart = document.getElementById("start");
    var btnReset = document.getElementById("reset");
    var interval; //not sure what this does
    var lapCounter = 0;
    var lapInterval;
    let arrLap = [];
    let max = 0;
    let index = 0;
    let maxLaps =[];
    let min = 10000000000000000000;
    let minLaps = [];
    let clickCount = 0;

    btnReset.disabled = true;

    btnStart.addEventListener('click', () => {
        clickCount++
        console.log(clickCount)
        btnReset.disabled = false;
        if(clickCount % 2 === 0){
            clearInterval(interval);
            clearInterval(lapInterval)
            btnStart.style.color = 'green'
            btnStart.style.borderColor = 'green'
            btnStart.textContent = 'start'
            btnReset.textContent = 'reset'
        } else {
            clearInterval(interval);
            interval = setInterval(startTimer, 10);
            lapInterval = setInterval(startLapTimer, 10)
            btnStart.style.color = 'red'
            btnStart.style.borderColor = 'red'
            btnStart.textContent = 'stop'
            btnReset.textContent = 'lap'
        }
    })

    btnReset.addEventListener("click", () => {
        if(clickCount % 2 === 0){
        btnReset.textContent = 'lap'
        btnStart.style.borderColor = 'black';
        btnStart.style.color = 'black';
        clearInterval(interval);  
        clearInterval(lapInterval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        lapTens = "00";
        lapSeconds = "00";
        lapMinutes = "00";
        lapCounter = 0;
        addTens.innerHTML = tens;
        addSecs.innerHTML = seconds;
        addMins.innerHTML = minutes;
        //remove lap info, do not set to zero
        let newLap = document.getElementById("laps");
        newLap.innerHTML = ``;
        let clockBG = document.getElementById('time');
        clockBG.style.backgroundColor = 'white';
        let newDiv = document.createElement('div');
        let node = document.createTextNode(``);
        newDiv.prepend(node);
        let lapList = document.getElementById('laps');
        lapList.appendChild(newDiv);
        index = 0;
        max = 0;
        maxLaps = [];
        arrLap = [];
        min = 10000000000000000000;
        minLaps = [];
        clickCount = 0;
        } else {
        btnReset.textContent = 'lap'
        lapCounter++
        let currentLap = lapMinutes + lapSeconds + lapTens;
        arrLap.push(currentLap)
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', `lap${lapCounter}`);
        let node = document.createTextNode(`Lap ${lapCounter} - ${lapMinutes}:${lapSeconds}:${lapTens}`);
        newDiv.prepend(node);
        let lapList = document.getElementById('laps');
        lapList.prepend(newDiv);
        clearInterval(lapInterval);
        lapTens = "00";
        lapSeconds = "00";
        lapMinutes = "00";
        lapInterval = setInterval(startLapTimer, 10);
        for(let i = 0; i < arrLap.length; i++){
            if(arrLap[i] > max && i > 0){
                max = arrLap[i];
                index = 'lap'+(i+1);
                document.getElementById(`${index}`).style.color = 'red';
                for(let i = 0; i < maxLaps.length; i++){
                    document.getElementById(`${maxLaps[i]}`).style.color = 'black';
                }
                maxLaps.push(index);
            }
            if (arrLap[i] < max && arrLap[i] < min){
                min = arrLap[i];
                index = 'lap'+(i+1);
                document.getElementById(`${index}`).style.color = 'green';
                for(let i = 0; i < minLaps.length; i++){
                    document.getElementById(`${minLaps[i]}`).style.color = 'black';
                }
                minLaps.push(index);
                console.log(min)
            }
            if(arrLap[0] >= max){
                max = arrLap[0];
                index = 'lap'+(0+1);
                document.getElementById(`${index}`).style.color = 'red';
                maxLaps.push(index);
            }
            if(arrLap[0] <= min){
                min = arrLap[0];
                index = 'lap'+(0+1);
                document.getElementById(`${index}`).style.color = 'green';
                minLaps.push(index);
                console.log(min)
            }
        }
        }

        
    })

    function startTimer() {
        tens++;
        if(tens <= 9){
            tens = "0" + tens;
            addTens.innerHTML = tens;
        }

        if(tens > 9){
            addTens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            if(seconds < 10){
                seconds = "0" + seconds;
                addSecs.innerHTML = seconds;
            } else {
                addSecs.innerHTML = seconds;
            }
            tens = "0" + 0;
            addTens.innerHTML = tens;
        }


        if (seconds > 9){
            addSecs.innerHTML = seconds;
        }

        if(seconds > 59){
            minutes++;
            if(minutes < 10){
                minutes = "0" + minutes;
                addMins.innerHTML = minutes;
            } else {
                addMins.innerHTML = minutes;
            }
            seconds = "0" + 0;
            addSecs.innerHTML = seconds;
        }
        if(minutes > 9){
            addMins.innerHTML = minutes;
        }
    }

    function startLapTimer() {
        lapTens++;
        if(lapTens <= 9){
            lapTens = "0" + lapTens;
            lapTens = lapTens;
        }

        if(lapTens > 9){
            lapTens = lapTens;
        }

        if(lapTens > 99){
            lapSeconds++;
            if(lapSeconds < 10){
                lapSeconds = "0" + lapSeconds;
            } else {
                lapSeconds = lapSeconds;
            }
            lapTens = "0" + 0;
            lapTens = lapTens;
        }
        if (lapSeconds > 9){
            lapSeconds = lapSeconds;
        }

        if(lapSeconds > 59){
            lapMinutes++;
            if(lapMinutes < 10){
                lapMinutes = "0" + lapMinutes;
                lapMinutes = lapMinutes;
            } else {
                lapMinutes = lapMinutes;
            }
            lapSeconds = "0" + 0;
            lapSeconds = lapSeconds;
        }
        if(lapMinutes > 9){
            lapMinutes = lapMinutes;
        }
    }