function startGame(){
    const intervalID = setInterval(timeCount, 1000);
    timeShow.innerText = "Time Remaining: " + time;
}

const timeShow = document.getElementById("timer");
let time = 30;
let score = 0;
function timeCount(){
    time -= 1;
}

setTimeout(() => { 
    clearInterval(intervalID);
}, (31 * 1000));
target.onclick = function pressButton(){
    score += 1;
    document.getElementById("score").innerText = " Score: " + String(score) + " ";
};
