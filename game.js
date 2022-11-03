function startGame(){
    const intervalID = setInterval(timeCount, 1000);
    timeShow.innerText = time;
}

const timeShow = document.getElementById("timer");
let time = 30;

function timeCount(){

    time -= 1;
    timeShow.innerText = time;
}

setTimeout(() => { 
    clearInterval(intervalID);
}, (31 * 1000));