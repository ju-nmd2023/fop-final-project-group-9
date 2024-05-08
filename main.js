function setup() {
  createCanvas(1000, 800);
}

function preload() {
  startImg = loadImage("images/Startscreen.png");
}

let state = "start";
let gameIsRunning = false;

function startScreen() {
  if (state === "start") {
    image(startImg, 0, 0);
  }
}

function gameScreen() {
  if (state === "game") {
    gameIsRunning = true;
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
    image(startImg, 0, 0);
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}
