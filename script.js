console.log("Ahi te voy san pedro");
const cpuCount = document.querySelector("#com-score");
const userCount = document.querySelector("#user-score");
const buttons = Array.from (document.querySelectorAll("[data-option]"));
const resultado = document.querySelector("h1");
const userOptionImg = document.querySelector("#user-option-img");
const comOptionImg = document.querySelector("#com-option-img");
const imgSelection = [userOptionImg, comOptionImg];
const UserNameValue = document.querySelector("#user-name");
let userName = prompt("Cual es tu nombre?");

while (userName.trim() === "" ) {
  userName = prompt("Cual es tu nombre?");
}

UserNameValue.innerText = userName;

function showSelectionsImg (userImg, cpuImg) {
  userOptionImg.setAttribute("src", `/${userImg}.png`)
  comOptionImg.setAttribute("src", `/${cpuImg}.png`)
  imgSelection[0].classList.remove("inactive")
  imgSelection[1].classList.remove("inactive")
}






const OPTIONS_NAMES = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissor"
}

let cpuScore = 0;
let userScore = 0;

const selections = [
  {
    value: OPTIONS_NAMES.ROCK,
    lose: OPTIONS_NAMES.PAPER,
    beat: OPTIONS_NAMES.SCISSOR
  },
  {
    value: OPTIONS_NAMES.PAPER,
    lose: OPTIONS_NAMES.SCISSOR,
    beat: OPTIONS_NAMES.ROCK
  },
  {
    value: OPTIONS_NAMES.SCISSOR,
    lose: OPTIONS_NAMES.ROCK,
    beat: OPTIONS_NAMES.PAPER
  }
]

function win () {
    userScore++;
    userCount.innerText = userScore;
}
function lose () {
    cpuScore++;
    cpuCount.innerText = cpuScore;
}


function getCpuChoice() {
  
  const randomNumber = Math.floor(Math.random() * selections.length);
  return selections[randomNumber];
}

buttons.forEach((button,index)  => {
  button.addEventListener("click",() => {
    play(selections[index])
  }  )
})



function resultadoGame(winner,WinnerGame ) {
  if (winner === null) {
    resultado.innerText = `Es un empate con ${WinnerGame}`
    return
  }
 
  resultado.innerText = `El ganador es ${winner} con ${WinnerGame}`

  
}

function play(userSelection) {
  const cpuChoice = getCpuChoice();
  imgSelection.forEach(img => {
    img.classList.add("inactive")
   })

  const isUserWins = userSelection.value === cpuChoice.lose;
  console.log(isUserWins);
  const isDraw = userSelection.value === cpuChoice.value;

  if(isDraw) {
    console.log("empate con " + userSelection.value + " " + cpuChoice.value)
    resultadoGame(null, userSelection.value);

    
  }
  if (isUserWins) {
    console.log("Gano el usuario con " + userSelection.value + " y perdio el cpu con " + cpuChoice.value);
    resultadoGame(userName, userSelection.value);


    win();
   
  }
  if (!isUserWins && !isDraw) {
   console.log("perdio el usuario con " + userSelection.value + " y gano el CPU con " + cpuChoice.value)
   resultadoGame(`CPU`, cpuChoice.value);

   lose();
  }

  showSelectionsImg(userSelection.value, cpuChoice.value);
  


}

console.log(buttons)

console.log("Ya sirve denuevo");