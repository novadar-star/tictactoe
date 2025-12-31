//create a 3 by 3 matrix by row and col usig 2d arrays

const board = document.querySelector("tictac");

const gameBoard = (() =>{
    let gameboard = ["","", "","","", "","","", ""]
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

/*generate math random*/



/*image wont appear once hover*/

