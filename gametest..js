

function randomPos(){
    let height = document.body.clientHeight
    let width = document.body.clientWidth
    let randHeight = Math.floor(Math.random() * height)
    let randWidth = Math.floor(Math.random() * width)
    return [randHeight, randWidth]
}