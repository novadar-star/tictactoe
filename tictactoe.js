//create a 3 by 3 matrix by row and col usig 2d arrays

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
   
/*
for(const i = 0; i<3; i++){
    for(const j = 0; j<3; j++){
    }
     console.log(" " + items[i][j])

}
    
*/
const tictacbutton = document.querySelectorAll(".box");
const text = document.querySelectorAll("h1");

tictacbutton.forEach(button =>{
    button.addEventListener("click", function(e){
        e.target.innerText = "X";
    })
})
/*
tictacbutton.addEventListener("mouseover", e =>{
    if(e.target.tagName == "button"){
        e.target.style.backgroundImage = "url(alphabet.png)";
    }
});


tictacbutton.addEventListener("mouseout", e =>{
    if(e.target.tagName == "button"){
        e.target.style.backgroundImage = "url(alphabet.png)";
    }
});
*/

/*image wont appear once hover*/

