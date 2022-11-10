let intervalID = 0;
const TIME_REMAINING = 10;
let time = TIME_REMAINING;
let score = 0;
function startGame(){
    if(intervalID != 0){
        return;
    }
    intervalID = setInterval(timeCount, 1000);
    timeShow.innerText = "Time Remaining: " + time;

    setTimeout(() => { 
        time = TIME_REMAINING;
        clearInterval(intervalID);
        intervalID = 0;

        score = 0;

        timeShow.innerText = "Game Over";
        button.remove();

    }, (TIME_REMAINING * 1000));
    var myDiv = document.getElementById("GFG");
    var button = document.createElement('BUTTON');
    button.setAttribute("id","target");
    button.setAttribute("class","target");
    button.setAttribute("onclick","pressButton()");
    myDiv.appendChild(button);
    randomPos();
}

const timeShow = document.getElementById("timer");

function timeCount(){
    time -= 1;
    timeShow.innerText = "Time Remaining: " + time;
}

function pressButton(){
    score += 1;
    document.getElementById("score").innerText = " Score: " + String(score) + " ";
    /*
    let die = getElementById("target");
    die.remove(); 
    var myDiv = document.getElementById("GFG");
    var button = document.createElement('BUTTON');
    button.setAttribute("id","target");
    button.setAttribute("class","target");
    button.setAttribute("onclick","pressButton()");
    myDiv.appendChild(button);*/
    randomPos();
};


function randomPos(){
    const target = document.getElementById("target");
    let height = document.body.clientHeight;
    let width = document.body.clientWidth;
    let randHeight = Math.floor(Math.random() * (height - target.offsetHeight));
    let randWidth = Math.floor(Math.random() * (width - target.offsetWidth));
    target.style.position = "absolute";
    target.style.top = randHeight + "px";
    target.style.left = randWidth + "px";
}
