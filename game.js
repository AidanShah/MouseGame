function startGame(){
    const intervalID = setInterval(timeCount, 1000);
    timeShow.innerText = "Time Remaining: " + time;
}

const timeShow = document.getElementById("timer");
let time = 30;

function timeCount(){
    time -= 1;
    timeShow.innerText = "Time Remaining: " + time;
}

setTimeout(() => { 
    clearInterval(intervalID);
}, (31 * 1000));