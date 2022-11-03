const intervalID = setInterval(timeCount, 1000);
const timeShow = document.getElementById("timer");
let time = 30;

function timeCount(){
    timeShow.innerText = time;
    time -= 1;
    
}

setTimeout(() => { 
    clearInterval(intervalID);
}, (31 * 1000));