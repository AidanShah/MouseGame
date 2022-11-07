let intervalID = 0;

function startGame(){
    if(intervalID != 0){
        return;
    }
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

target.onclick = function pressButton(){
    score += 1;
    document.getElementById("score").innerText = " Score: " + String(score) + " ";
};



function randomPos(){
    const target = document.getElementById("redButton");
    let height = document.body.clientHeight;
    let width = document.body.clientWidth;
    let randHeight = Math.floor(Math.random() * (height - target.offsetHeight));
    let randWidth = Math.floor(Math.random() * (width - target.offsetWidth));
    target.style.position = "absolute";
    target.style.top = randHeight + "px";
    target.style.left = randWidth + "px";
}