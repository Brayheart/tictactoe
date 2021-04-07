document.addEventListener("DOMContentloaded", () => {
  const squares = document.querySelectorAll('.grid div')

  squares.forEach(square => {
    console.log(square)
    square.addEventListener('click', clickOutcome)
  })

  function clickOutcome(e){
    console.log('here')
  }
})


// document.addEventListener('DOMContentLoaded', () => {
//   const squares = document.querySelectorAll('.grid div')

//   squares.forEach(square => {
//     // console.log(square)
//     square.addEventListener('click', clickOutcome)
//   })

//   function clickOutcome(e) {
// console.log("here")
//   }
// })