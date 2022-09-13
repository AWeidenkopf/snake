
/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/

let board, newSquare, square, snake, score, 
currIdx, appleIdx, direction 

/*------------------------ Cached Element References ------------------------*/

const gameContainer = document.getElementById('game-container')

/*----------------------------- Event Listeners -----------------------------*/
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

  console.log(square)
  snake = [0, 1, 2]
  direction = 1;
  currIdx = 0;
  getSnake()
  apple()
}

function getSnake() {

  snake.forEach((el, idx) => {
    console.log(square[el])
    square[idx].classList.add('snake')
  })
}

function apple() {
  
  let currAppleIdx = (Math.floor(Math.random() * square.length))

  square[currAppleIdx].style.backgroundColor = 'red';
}

