const intervalID = setInterval(timeCount, 1000);
const timeShow = document.getElementById("timer");
let score = 0;
let time = 30;

function timeCount(){
    timeShow.innerText = time;
    time -= 1;
    
}

setTimeout(() => { 
    clearInterval(intervalID);
}, (31 * 1000));
target.onclick = function pressButton(){
    score += 1;
    document.getElementById("score").innerText = " Score: " + toString(score) + " ";
};