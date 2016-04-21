var timer;
var totalSeconds;

function createTimer(timerID, time) {
    console.log("Creating timer");
    timer = document.getElementById(timerID);
    totalSeconds = time;
    updateTimer();
    window.setTimeout("tick()", 1000);
}

function tick() {
    if (totalSeconds <= 0) {
        alert("Time's up!")
        return;
    }
    totalSeconds -= 1;
    updateTimer();
    window.setTimeout("tick()", 1000);
}

function updateTimer() {
    var seconds = totalSeconds;

    var days = Math.floor(seconds / 86400);
    seconds -= days * 86400;

    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;

    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    var timeStr = ((days > 0) ? days + " days " : "") + leadingZero(hours) + ":" + leadingZero(minutes) + ":" + leadingZero(seconds)
    timer.innerHTML = timeStr;
}

function leadingZero(time) {
    return (time < 10) ? "0" + time : + time;
}

// References:
// http://forum.codecall.net/topic/51639-how-to-create-a-countdown-timer-in-javascript/
