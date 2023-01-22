// 8 x 8 grid
// 2 players
// pawns move 1 space forward
// at initial position, pawn can move 2 spaces forward
// 8 pawns for each player

// function that takes in a chessboard, list of movements, and output what the chessboard looks like at the end
// pawns can overlap for the first iteration
// list should be the chronological order moves 

class Chessboard {
    constructor(pawns) {
        // 8x8 grid
        // this.grid = grid;
        // pawns 
        this.pawns = pawns;
    }
    // movements (function)
    update(x, y) {
        // in the Chessboard array, find the Pawn object that has the equal x and y value as the x + y value passed as arg through the update function
        const selectedPawn = this.pawns.find(pawn => pawn.x === x && pawn.y === y);
        // run the move() method on that selected pawn object
        selectedPawn.move();
    }
}

class Pawn {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        // we are assuming that 'white' will start from y = 0 moving upwards, and 'black' will start from y = 8, moving downwards
    }
    move(moves) {
        // pawn move 1 space forward
        // at initial position, pawn can move 2 spaces forward
        if (this.color === 'white') {
            if (this.y === 0 && moves) {
                return this.y = this.y + 2;
            } else {
                return this.y = this.y + 1;
            }
        } else if (this.color === 'black') {
            if (this.y === 8 && moves) {
                return this.y = this.y - 2;
            } else {
                return this.y = this.y - 1;
            }
        }
    }
}

const pawnOne = new Pawn(0, 0, 'white');
const pawnTwo = new Pawn(8, 8, 'black');
const pawnThree = new Pawn(6, 8, 'black');

const chessboard = new Chessboard([pawnOne, pawnTwo, pawnThree]);

console.log(chessboard.update(6, 8));
console.log(chessboard.pawns)

// console.log(pawnOne.move())

