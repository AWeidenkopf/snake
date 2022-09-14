
/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/

let board, boardSize, newSquare, square, snake, score, interval,
  currIdx, currAppleIdx, direction, nextDirection

/*------------------------ Cached Element References ------------------------*/

const gameContainer = document.getElementById('game-container')
const resetBtn = document.getElementById('reset')

/*----------------------------- Event Listeners -----------------------------*/

document.addEventListener('keydown', controls)
resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  clearInterval(interval)
  if (board === undefined) {
    for (i = 0; i <= 359; i++) {
      newSquare = document.createElement('div')
      newSquare.setAttribute('id', `sq${i}`)
      newSquare.setAttribute('class', 'innerSquare')
      board = gameContainer.appendChild(newSquare)
    }
  } else {
    square.forEach((el) => {
      el.classList.remove('apple', 'snake')
    })

    gameContainer.style.backgroundColor = 'white'
}
  square = document.querySelectorAll('div.innerSquare')
  start()

}


function start() {

  snake = [0, 1, 2]
  direction = 1;
  boardSize = 20
  score = 0;
  apple()
  getSnake()

  interval = setInterval(movement, 200)

}

function getSnake() {

  snake.forEach((el, idx) => {
    square[idx].classList.add('snake')
  })
}

function movement() {
  square.forEach((el, idx) => {
    if (el.classList.contains('snake') && !snake.includes(idx)) {
      if (!el.classList.contains('apple')) {
        square[idx].classList.add('poop')
      }
    }
  })

  if (snake[snake.length - 1] + direction >= boardSize * 18 && direction === 20) {
    return gameOver()
  }
  if (snake[snake.length - 1] + direction < 0 && direction === -20) {
    return gameOver()
  }
  if (snake[snake.length - 1] % boardSize === boardSize - 1 && direction === 1) {
    return gameOver()
  }
  if (snake[snake.length - 1] % boardSize === 0 && direction === -1) {
    return gameOver()
  }
  if (square[snake[snake.length - 1] + direction].classList.contains('snake')) {
    return gameOver()
  }


  let end = snake.shift()
  square[end].classList.remove('snake')

  let lastEl = snake.length - 1

  snake.push(snake[lastEl] + direction)

  let currClass = square[snake[lastEl] + direction].getAttribute('class')

  if (currClass.includes('apple')) {
    square[currAppleIdx].classList.replace('apple', 'snake')
    snake.push(currAppleIdx)
    score += 100
    apple()
  }



  square[snake[lastEl] + direction].classList.add('snake')

}


function controls(e) {
  if (Math.abs(direction) === 20) {
    if (e.keyCode === 39) {
      console.log("right")
      direction = 1
    }
    if (e.keyCode === 37) {
      console.log("left")
      direction = -1
    }
  } else if (Math.abs(direction) === 1) {
    if (e.keyCode === 38) {
      console.log("up")
      direction = -20
    }
    if (e.keyCode === 40) {
      console.log("down")
      direction = 20
    }
  }
}


function apple() {

  currAppleIdx = (Math.floor(Math.random() * square.length))
  let currClass = square[currAppleIdx].getAttribute('class')

  if (!currClass.includes('snake')) {
    square[currAppleIdx].classList.add('apple')
  } else {
    apple()
  }
}

function gameOver() {
  clearInterval(interval)
  gameContainer.style.backgroundColor = 'red'
}