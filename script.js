console.log("Ahi te voy san pedro");
const cpuCount = document.querySelector("#com-score");
const userCount = document.querySelector("#user-score");

const resultado = document.querySelector("h1");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
const comRockImg = document.querySelector("#com-hand-rock");
const userRockImg = document.querySelector("#user-hand-rock");
const comPaperImg = document.querySelector("#com-hand-paper");
const userPaperImg = document.querySelector("#user-hand-paper");
const comScissorImg = document.querySelector("#com-hand-scissor");
const userScissorImg = document.querySelector("#user-hand-scissor");
let options = ["rock", "paper", "scissor"];
let cpuScore = 0;
let userScore = 0;

function winner () {
    userScore++;
    userCount.innerText = userScore;
}
function lose () {
    cpuScore++;
    cpuCount.innerText = cpuScore;
}


function getCpuChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

rockButton.addEventListener("click", () => {
  play(options[0]);
});
paperButton.addEventListener("click", () => {
  play(options[1]);
});
scissorButton.addEventListener("click", () => {
  play(options[2]);
});

function play(userSelection) {
  const cpuChoice = getCpuChoice();
  comRockImg.classList.add("inactive");
  userRockImg.classList.add("inactive");
  comPaperImg.classList.add("inactive");
  userPaperImg.classList.add("inactive");
  comScissorImg.classList.add("inactive");
  userScissorImg.classList.add("inactive");

  if (userSelection === "rock" && cpuChoice === "scissor") {
    console.log("Ha ganado el usuario");
    resultado.innerText = "Ha ganado el usuario! con " + userSelection + "!";
    userRockImg.classList.remove("inactive");
    comScissorImg.classList.remove("inactive");
    winner();
  }

  if (userSelection === "paper" && cpuChoice === "rock") {
    console.log("Ha ganado el usuario");
    resultado.innerText = "Ha ganado el usuario! con " + userSelection + "!";
    userPaperImg.classList.remove("inactive");
    comRockImg.classList.remove("inactive");
    winner();
  }

  if (userSelection === "scissor" && cpuChoice === "paper") {
    console.log("Ha ganado el usuario");
    resultado.innerText = "Ha ganado el usuario! con " + userSelection + "!";
    userScissorImg.classList.remove("inactive");
    comPaperImg.classList.remove("inactive");
    winner();
  }

  if (userSelection === "rock" && cpuChoice === "rock") {
    console.log("Es un empate");
    resultado.innerText = "Empate con " + userSelection + "!";
    userRockImg.classList.remove("inactive");
    comRockImg.classList.remove("inactive");
  }
  if (userSelection === "paper" && cpuChoice === "paper") {
    console.log("Es un empate");
    resultado.innerText = "Empate con " + userSelection + "!";
    userPaperImg.classList.remove("inactive");
    comPaperImg.classList.remove("inactive");
  }
  if (userSelection === "scissor" && cpuChoice === "scissor") {
    console.log("Es un empate");
    resultado.innerText = "Empate con " + userSelection + "!";
    userScissorImg.classList.remove("inactive");
    comScissorImg.classList.remove("inactive");
  }
  if (userSelection === "rock" && cpuChoice === "paper") {
    console.log("Ha ganado el CPU");
    resultado.innerText = "Ha ganado el CPU con " + userSelection + "!";
    userRockImg.classList.remove("inactive");
    comPaperImg.classList.remove("inactive");
    lose();
  }
  if (userSelection === "paper" && cpuChoice === "scissor") {
    console.log("Ha ganado el CPU");
    resultado.innerText = "Ha ganado el CPU con " + userSelection + "!";
    userPaperImg.classList.remove("inactive");
    comScissorImg.classList.remove("inactive");
    lose();
  }
  if (userSelection === "scissor" && cpuChoice === "rock") {
    console.log("Ha ganado el CPU");
    resultado.innerText = "Ha ganado el CPU con " + userSelection + "!";
    userScissorImg.classList.remove("inactive");
    comRockImg.classList.remove("inactive");
    lose();
  }
}
