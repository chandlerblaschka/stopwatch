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
    var btnStop = document.getElementById("stop");
    var btnReset = document.getElementById("reset");
    var btnLap = document.getElementById("lap");
    var interval; //not sure what this does
    var lapCounter = 0;
    var lapInterval;

    var btnLock = document.getElementById("lap")
    btnLock.disabled = true;

    btnStart.addEventListener("click", () => {
        clearInterval(interval);
        //let clockBG = document.getElementById('time')
        //clockBG.style.backgroundColor = 'green';
        interval = setInterval(startTimer, 10);
        lapInterval = setInterval(startLapTimer, 10);
        btnLock.disabled = false;
        btnStart.disabled = true;
    })

    btnStop.addEventListener("click", () => {
        clearInterval(interval);
        clearInterval(lapInterval);
        btnLock.disabled = true;
        btnStart.disabled = false;
    })

    btnLap.addEventListener("click", () => {
        lapCounter++
        //figure out how to highlight fastest and slowest laps
        
        let newDiv = document.createElement('div');
        let node = document.createTextNode(`Lap ${lapCounter} - ${lapMinutes}:${lapSeconds}:${lapTens}`);
        newDiv.prepend(node);
        let lapList = document.getElementById('laps');
        lapList.prepend(newDiv);
        clearInterval(lapInterval);

        lapTens = "00";
        lapSeconds = "00";
        lapMinutes = "00";


        lapInterval = setInterval(startLapTimer, 10);
    })

    btnReset.addEventListener("click", () => {
        clearInterval(interval);  
        clearInterval(lapInterval);
        btnLock.disabled = true;  
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
        btnStart.disabled = false;
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
            //console.log("seconds");
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
        
        // if(seconds < 10){
        //     //seconds = "0" + seconds;
        //     addSecs.innerHTML = "0" + seconds;
        // }

        if (seconds > 9){
            addSecs.innerHTML = seconds;
        }

        if(seconds > 59){
            //console.log("minutes");
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

        // if(minutes = 0){
        //      addMins.innerHTML = "00";
        // }

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