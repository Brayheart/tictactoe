class Player {
    constructor(sym, name) {
        this.sym = sym
        this.name = name
    }
}

class Board {
    constructor() {
        this.grid = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['X', 'X', 'X']
        ]
    }

    printGrid() {
        let string = ""
        this.grid.forEach(row => {
            string += JSON.stringify(row) + '\n'
        })
        return string
    }
    //[y,x]
    placeSymbol(sym, coord) {
        const y = coord[0]
        const x = coord[1]
        if (this.grid[y][x] === '-') {
            this.grid[y][x] = sym
        }
    }

    checkWinHorizontal(sym) {
      //need a counter for every row
      // if the counter !== 3 then i did not win that row, continue to next row
      // if counter === 3 then i won and can return true and not continue checking other rows
      // if i go through all the rows without returning true, return false
      var counter = 0
      this.grid.forEach((row) => {
        row.forEach(el => {
            if(el === sym){
                counter++
            }
        })
      })
        if(counter === 3){
            return "Win"
        }
        return 'false'
    }

    checkWinVeritcally(sym) {
        for (let x = 0; x < this.grid.length; x++) {
            var counter = 0

            for (let y = 0; y < this.grid.length; y++) {
                if(this.grid[y][x] === sym){
                    counter++
                }    
            }

            if(counter === 3){
                return "Win"
            }
            
        }
        return 'false'
    }

    checkWinDiagonally() {

    }

}

class Game {
    constructor(name1, sym1, name2, sym2) {
        this.player1 = new Player(sym1, name1)
        this.player2 = new Player(sym2, name2)
        this.board = new Board()
    }
}

var player1 = window.prompt("Player one, what is your name")
var sym1 = window.prompt(`${player1} what is your symbol?`)
var player2 = window.prompt("Player one, what is your name")
var sym2 = window.prompt(`${player2} what is your symbol?`)

const game = new Game(player1, sym1, player2, sym2)
console.log(game.board.printGrid())