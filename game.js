//initializing all variables needed
let intervalID = 0;
const TIME_REMAINING = 10;
let time = TIME_REMAINING;
let score = 0;
var button = document.createElement('BUTTON');
const timeShow = document.getElementById("timer");
let accuracy = 0;
let missed = 0;

//function that starts the game and sets a timer that will eventually end the game
function startGame(){
    //sets timer
    if(intervalID != 0){
        return;
    }
    intervalID = setInterval(timeCount, 1000);
    timeShow.innerText = "Time Remaining: " + time;
    //describes what happens when the game ends
    setTimeout(() => { 
        time = TIME_REMAINING;
        clearInterval(intervalID);
        intervalID = 0;
        accuracy = score/(missed+score)*100;
        document.getElementById("accuracy").innerText = "Accuracy: " + String(accuracy);
        document.getElementById("totalTargets").innerText = "Total Targets: " + String(missed+score);
        score = 0;

        timeShow.innerText = "Game Over";
        button.remove();

    }, (TIME_REMAINING * 1000));
    buttonCreate();

    randomPos();
}
//function that creates a target and sets its attributes
function buttonCreate(){
    var myDiv = document.getElementById("buttons");
    button.setAttribute("id","target");
    button.setAttribute("class","target");
    button.setAttribute("onclick","pressButton()");
    myDiv.appendChild(button);
}

//function that counts and displays time
function timeCount(){
    time -= 1;
    timeShow.innerText = "Time Remaining: " + time;
}

//function that incriments score when the button is pressed
function pressButton(){
    score += 1;
    document.getElementById("score").innerText = " Score: " + String(score) + " ";
    button.remove();
    buttonCreate();
    randomPos();
};

//function that sets the position of the target to a random position
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
