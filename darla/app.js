
//store gameboard array inside of gameboard obect

    const Gameboard = () =>{
        const gameboard = ["","","","","","","","",""];
        const board = document.querySelector(".gameboard");
        board.innerHTML = "";

        board.forEach((value,index) => {
            // assign to variable the create elemt
           // and addclass list
                const box = board.createElement("div")
                box.classList.add("box");
                //box id is base on the index
                box.id = index;
                //text conent of box base on X and O
                box.textContent = value;
                //append box divs to baord
                board.appendChild("box")

        })
        const getgameboard = () => gameboard;

    }
//function forbstarting and displaying boxes
//function checkwinner/ combination


document.querySelector("#start").addEventListener("click", start())