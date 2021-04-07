document.addEventListener("DOMContentLoaded", () => {
  console.log("here")
  const squares = document.querySelectorAll('.grid div')
  const playerDisplay = document.querySelector('#player')

  let currentPlayer = 'PlayerX'

  squares.forEach(square => {
    square.addEventListener('click', clickOutcome)
  })

  function clickOutcome(e){
    const squareArray = Array.from(squares)
    const index = squareArray.indexOf(e.target)
    playerDisplay.innerHTML = currentPlayer

    if(currentPlayer === 'PlayerX'){
      squares[index].classList.add('playerX')
      currentPlayer = 'PlayerO'
    } else {
      squares[index].classList.add('playerO')
      currentPlayer = 'PlayerX'
    }
  }
})


