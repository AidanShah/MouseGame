let intervalID = 0;

function startGame(){
    intervalID = setInterval(timeCount, 1000);
    timeShow.innerText = "Time Remaining: " + time;

    setTimeout(() => { 
        time = 30;
        clearInterval(intervalID);

        timeShow.innerText = "Game Over";

    }, (30 * 1000));
}

const timeShow = document.getElementById("timer");
let time = 30;

function timeCount(){
    time -= 1;
    timeShow.innerText = "Time Remaining: " + time;
}

