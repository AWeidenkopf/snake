
/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/

let board

/*------------------------ Cached Element References ------------------------*/

const gameContainer = document.getElementById('game-container')

/*----------------------------- Event Listeners -----------------------------*/
/*-------------------------------- Functions --------------------------------*/
init()

function init() {

  for(i = 0; i <= 359; i++){
    let eachSquare = document.createElement('div')
    eachSquare.setAttribute('id', `sq${i}`)
    eachSquare.setAttribute('class', 'innerSquare')
    gameContainer.appendChild(eachSquare)
  }
}