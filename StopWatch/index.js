const display = document.getElementById('display');
let timer = null;
let stopTime = 0;
let elaspedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elaspedTime;
        timer = setInterval(update, 10)
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elaspedTime = Date.now() - startTime
        isRunning = false;
        console.log('stop')
    }
}

function reset(){
    clearInterval(timer);
    stopTime = 0;
    elaspedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00:00'
    console.log('reset')
    }

function update(){
    const currentTime = Date.now();
    elaspedTime = currentTime - startTime;

    let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elaspedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elaspedTime / 1000 % 60);
    let milliseconds = Math.floor(elaspedTime % 1000 / 10);
    hours = hours.toString().padStart(2, 0)
    minutes = minutes.toString().padStart(2, 0)
    seconds = seconds.toString().padStart(2, 0)
    milliseconds = milliseconds.toString().padStart(2, 0)
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`

    console.log("start")
}