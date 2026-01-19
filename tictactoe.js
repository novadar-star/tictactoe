//create a 3 by 3 matrix by row and col usig 2d arrays

//gameboard object controlling the flow of the gme
const Gameboard = (()=> {
    let board = ["","", "","","", "","","", ""];

    const render = () => {
        const gameboard = document.querySelector(".gameboard")
        gameboard.innerHTML = "";

            board.forEach((value, index) => {
                const box = document.createElement("div");
                box.classList.add("box")
                box.id = index;
                box.textContent = value;
                box.addEventListener("click", Game.handleClick)
                gameboard.appendChild(box);
        })
    }

//once user click, a mar of either X or O
const setMark = (index, mark) => {
    if(board[index] === ""){ //if its empty u can mark on it
        board[index] = mark;
        return true;
    }
    return false;
}

    const reset = () => {
        board = ["","", "","","", "","","", ""];

    }

    const getBoard = () => board;

    return {
        render, setMark, reset, getBoard
    }

})();


const createPlayer = (name, mark) => {
    return {
        name, mark
    };
};

const Game = (()=>{
    let players = [];
    let currentplayerIndex = 0;
    let gameOver = false;

    const message = document.querySelector("#message")

    const start = () =>{
        players = [
            createPlayer(player1.value || "Player 1", "X"),
            createPlayer(player2.value || "Player 2", "O")
        ];

        currentplayerIndex = 0;
        gameOver = false;
        message.textContent = players[0].name + "'s turn (X)";
        Gameboard.reset() //atach the functionr eset
        Gameboard.render();


    };

    const handleClick = (event) => {
        if(gameOver) return; //if gameover becomes true then return
        const index = event.target.id;
        const currentPlayer = players[currentplayerIndex];

        if(!Gameboard.setMark(index, currentPlayer.mark)) return; //dont understand this

        Gameboard.render();

        if(checkWinner()){
            message.textContent= currentPlayer.name + "wins!! yay!";
            gameOver = true;
            return;
        }

        if(checkDraw()){
            message.textContent = "its a draw";
            gameOver= true;
            return;
        }

        switchPlayer();
        message.textContent = players[currentPlayerIndex].name+ "'s turn (" 
        + players[currentplayerIndex].mark + ")";

    };

    const switchPlayer = () => {
        if (currentplayerIndex === 0) {
            currentplayerIndex = 1;
        } else {
            currentplayerIndex = 0;
        }
    };

    const checkWinner = () => {
        const board = Gameboard.getBoard();
        const mark = players[currentplayerIndex].mark;


        if(board[0] === mark && board[1] === mark && board[2]=== mark ||
        board[0] === mark && board[3] === mark && board[6]=== mark ||
        board[0] === mark && board[4] === mark && board[8]=== mark ||
        board[1] === mark && board[4] === mark && board[7]=== mark ||
        board[2] === mark && board[4] === mark && board[6]=== mark ||
        board[2] === mark && board[5] === mark && board[8]=== mark ||
        board[3] === mark && board[4] === mark && board[5]=== mark ||
        board[6] === mark && board[7] === mark && board[8]=== mark 
        ) {
            return true;
        }
        return false;
    };

    const checkDraw = () => {
        const board = Gameboard.getBoard();
        let filled = 0;

        board.forEach(cell => {
            if(cell !== ""){
                filled++;
            }
        });

        if(filled === 9){
            return true;
        }
        return false;
    };

    return{
        start, handleClick
    };


})();

document.querySelector("#start").addEventListener("click", Game.start);
document.querySelector("#restart").addEventListener("click", Game.start);
/*
const gameBoard = (() =>{
    let gameboard = ["","", "","","", "","","", ""];

  const show = () =>{
    let board = "";
    gameboard.forEach((square, index) => {
        board+= `<button class="box">${square}</button>`;
    })

  }
  document.querySelector("#gameboard").innerHTML = board;

  return {
     show,
  }
})();

//create an arrow function for the game itself then assign it to a var

const  Game = (() =>{
    let players = [];
    let currentplayerindex = 0;
    let gameEnd = false;


    const start= () => {
        players
    }
})
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

const tictacbutton = document.querySelectorAll(".box");
const text = document.querySelectorAll("h1");

let player = 1;
function showinput(box){
if(player ==1){
   tictacbutton.innerHTML = "X";
   player = 0;
}
else{
    tictacbutton.innerHTML = "O";
    player = 1;
}
}


/*
function screenControl(){
    const gamesession = GameController();
    const playerTurnSign = document.querySelector(".turn");
    const board = document.querySelector(".tictac");



    board.forEach(row =>{
        row.forEach((box, index) => {
            //create row n cell
            const cellButton = document.createElement("button");
            cellButton.classList.add("box");

            //data atribbute to know the column

            cellButton.dataset.column = index;
            cellButton.textContent =  box.getValue();
            //append the newly created button
            board.appendChild(cellButton);
        })
    })
}

screenControl();

function GameController(
    playerOne = "player one",
    playerTwo = "player two"){
        const board = Gameboard();
    }

/*

for(const i = 0; i<3; i++){
    for(const j = 0; j<3; j++){
    }
     console.log(" " + items[i][j])

}
    

tictacbutton.forEach(button =>{
    button.addEventListener("click", function(e){
        e.target.innerText = "X";
    })
})
*/
/*generate math random*/



/*image wont appear once hover*/

