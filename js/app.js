
/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/

let board, newSquare, square, snake, score, 
currIdx, currAppleIdx, direction 

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

  let currClass = square[snake[lastEl] + direction].getAttribute('class')

  if(currClass.includes('apple')){
    square[snake[lastEl] + direction].classList.replace('apple', 'snake')
    snake.unshift(snake[0])
    apple()
  }

  square[snake[lastEl] + direction].classList.add('snake')
}


function controls(e) {

  if(e.keyCode === 38){
    console.log("up")
    direction = -20
  }
  if(e.keyCode === 39){
    console.log("right")
    direction = 1
  }
  if(e.keyCode === 40){
    console.log("down")
    direction = 20
  }
  if(e.keyCode === 37){
    console.log("left")
    direction = -1
  } 
}


function apple() {

  currAppleIdx = (Math.floor(Math.random() * square.length))
  let currClass = square[currAppleIdx].getAttribute('class')

  if(currClass !== 'snake') {

  square[currAppleIdx].classList.add('apple')
  // square[currAppleIdx].style.backgroundColor = 'red';
} else {
  apple()
}
}



// function eatApple() {
//   if(){

//   }
//   square[snake[0]].classList.add('snake')
// }
