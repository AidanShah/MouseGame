function startGame(){
    const intervalID = setInterval(timeCount, 1000);
    timeShow.innerText = "Time Remaining: " + time;
    var myDiv = document.getElementById("GFG");
    var button = document.createElement('BUTTON');
    button.setAttribute("id","target");
    button.setAttribute("class","target");
    button.setAttribute("onclick","pressButton()");
    myDiv.appendChild(button);
}

const timeShow = document.getElementById("timer");
let time = 30;
let score = 0;
function timeCount(){
    time -= 1;
    timeShow.innerText = "Time Remaining: " + time;
}

setTimeout(() => { 
    clearInterval(intervalID);
}, (31 * 1000));
function pressButton(){
    score += 1;
    document.getElementById("score").innerText = " Score: " + String(score) + " ";
    let die = getElementById("target");
    die.remove(); 
    var myDiv = document.getElementById("GFG");
    var button = document.createElement('BUTTON');
    button.setAttribute("id","target");
    button.setAttribute("class","target");
    button.setAttribute("onclick","pressButton()");
    myDiv.appendChild(button);
};
