function setup() {
  createCanvas(1000, 800);
  background(230, 210, 200);
}

let startImg = document.createElement("img");
image.src = "images/Startscreen.png";
document.body.appendChild(image);
// let container = document.getElementById("image-container");
// container.appendChild(startImg);

let state = "start";
let gameIsRunning = false;

function startScreen() {
  if (state === "start") {
  }
}

function gameScreen() {
  if (state === "game") {
  }
}

function loseScreen() {
  if (state === "lose") {
  }
}

function winScreen() {
  if (state === "win") {
  }
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}
