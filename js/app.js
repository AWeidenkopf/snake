
/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/

let board, newSquare, square, snake, score, 
currIdx, appleIdx, direction 

/*------------------------ Cached Element References ------------------------*/

const gameContainer = document.getElementById('game-container')

/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener('keydown', controls)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {

  for(i = 0; i <= 359; i++){
    newSquare = document.createElement('div')
    newSquare.setAttribute('id', `sq${i}`)
    newSquare.setAttribute('class', 'innerSquare')
    gameContainer.appendChild(newSquare)
  }
  
  square = document.querySelectorAll('div.innerSquare')
  start()
}

function start(){

  snake = [0, 1, 2]
  direction = 1;
  currIdx = 0;
  apple()
  getSnake()

  setInterval(movement, 1000)

}

function getSnake() {
  
  snake.forEach((el, idx) => {
    square[idx].classList.add('snake')
  })
}

function movement() {

  let end = snake.shift()
  square[end].classList.remove('snake')

  let lastEl = snake.length -1

  snake.push(snake[lastEl] + direction)


  square[snake[lastEl] + direction].classList.add('snake')
}


function controls(e) {

  if(e.keyCode === 38){
    console.log("up")
  }
  if(e.keyCode === 39){
    console.log("right")
  }
  if(e.keyCode === 40){
    console.log("down")
  }
  if(e.keyCode === 37){
    console.log("left")
  } 
}

// function controls(e) {
  //   if(e.ke)
// }


function apple() {

  let currAppleIdx = (Math.floor(Math.random() * square.length))
  let currClass = square[currAppleIdx].getAttribute('class')

  if(currClass !== 'snake') {
  square[currAppleIdx].style.backgroundColor = 'red';
} else {
  apple()
}
}

function eatApple() {
  
  square[snake[0]].classList.add('snake')
}
