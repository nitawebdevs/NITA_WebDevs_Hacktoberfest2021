var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

var second = 0;
var minute = 0;
var Interval;

start.addEventListener("click", function () {
    clearInterval(Interval);
    Interval = setInterval(mySeconds, 1000)
})

function mySeconds() {
    second++;
    if (second < 10) {
        seconds.innerHTML = "0" + second;
    }
    else if (second > 9 && second < 60) {
        seconds.innerHTML = second;
    }
    else if (second == 60) {
        seconds.innerHTML = "00";
        second = 0;
        minute++;
        if (minute < 10) {

            minutes.innerHTML = "0" + minute;
        } else {
            minutes.innerHTML = minute;
        }
    }
}


stop.addEventListener("click", function () {
    clearInterval(Interval);
});


reset.addEventListener("click", function () {
    clearInterval(Interval);
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    second = 0;
    minute = 0;
});