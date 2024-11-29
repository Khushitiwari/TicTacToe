let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");

let newBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO= true; //playerX, playerO
let count = 0;

const winPatterns=[

   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],


];


const resetGame = ()=> {
    turnO= true;
    enableBoxes();
    msgContainer.classList.add("hide");

    
    
};
 





// for each box adding event listener
boxes.forEach((box) => {
    box.addEventListener("click", () => {
    console.log("box was clicked");

    if(turnO) { // playerO turn
        box.innerText="O";
        box.style.color = "red";
        turnO=false; // so next time will not true continuosly
    }
    else{// playerX turn
        box.innerText="X";
        box.style.color = "black";
        turnO= true; // so afler payerX O will print for playerO

    }     
     box.disabled= true;
     count++;
     
     let isWinner = checkWinner();

     if (count === 9 && !isWinner) {
        drawGame("tie");
    }
     
     
     
    
});

});





const drawGame = (draw) => {
    msg.innerText= `The game is  ${draw} `;
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const disableBoxes =() => {
    for (let box of boxes) {
        box.disabled  = true;

        
    }
};

const enableBoxes =() => {
    for (let box of boxes) {
        box.disabled  = false;
        box.innerText="";

        
    }
};

const showWinner = (winner) => {
    msg.innerText =`Congratulation, Winner is player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};

const checkWinner = () => {
     
    for (let pattern of winPatterns) {
    
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !=="" && pos2Val !== "" && pos3Val !== ""){
            if (pos1Val===pos2Val && pos2Val===pos3Val) {
                console.log("winner",pos1Val);
                showWinner(pos1Val);
               
            }
        }
    }
}

newBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame); 
