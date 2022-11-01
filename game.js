function startGame(){
    const intervalID = setInterval(startGame, 30000);
    setTimeout(() => { // do something 
        clearInterval(intervalID);
    }, 10 * 1000);
}