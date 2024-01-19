let boxes = document.querySelectorAll(".box");

let clearBtn = document.querySelector("#btn-reset");
let newBtn = document.querySelector("#btn-new");
let msgContainer=document.querySelector(".msg-container");
let message=document.querySelector("p");

// Logic for players turn
let turnO = true; //playerX,player0

// winning pattern
let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnO) {
      box.innerHTML = "X";
      box.style.color="green";
      turnO = false;
    } else {
      box.innerHTML = "O";
      turnO = true;
      box.style.color="red";

    }
    box.disabled = true;
    checkWinner();
    checkTie();
  });
});

// #clearBtn.addEventListener('click', ()=>{
//     boxes.forEach(box=>{
//         box.innerHTML="";
//     })
// })


const checkTie = () => {
    let isTie = true;
    for (let box of boxes) {
      if (box.innerText === "") {
        isTie = false;
        break;
      }
    }
  
    if (isTie) {
      disableBoxes();
      message.innerHTML = `<h3>It's a tie!</h3>`;
      msgContainer.classList.remove("hide");
    }
  };

const resetGame=()=>{
turnO=true;
enableBoxes();
msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
}


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    }

const showWinner=(winner)=>{
    message.innerHTML=`<h3> Congratulations! Winner is ${winner}</h3>`;
    msgContainer.classList.remove("hide");

   
}




const checkWinner = () => {
    // winningPatterns.forEach((pattern)=>{
  //     console.log(pattern);
  // })
  for (pattern of winningPatterns) {
    //  console.log(pattern[0], pattern[1],pattern[2]);

    // console.log(boxes[pattern[0]], boxes[pattern[1]],boxes[pattern[2]]);

    //   console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        //console.log("winner is", pos1);
        disableBoxes();
        showWinner(pos1);
      }

    
    }

    
  }

 
};


clearBtn.addEventListener('click', resetGame);

newBtn.addEventListener('click', resetGame);