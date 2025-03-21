let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 10);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('milliseconds').textContent = formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function reset() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isRunning = false;
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('milliseconds').textContent = '00';
    document.getElementById('startStop').textContent = 'Start';
}