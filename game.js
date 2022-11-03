const intervalID = setInterval(timeCount, 1000);
const timeShow = document.getElementById("timer");
let time = 31;

function timeCount(){

    time -= 1;
    timeShow.innerText = time;
    
}

setTimeout(() => { 
    clearInterval(intervalID);
}, (30 * 1000));