function setup() {
  createCanvas(1000, 800);
}

function preload() {
  startImg = loadImage("images/startscreenn.jpg");
}

function startButton() {
  push();
  let x = 200;
  let y = 70;

  fill(0);
  stroke(247, 247, 5);
  strokeWeight(5);
  rect(410, 350, x, y);
  textSize(20);
  text("Start Game", 460, 390);

  pop();
}

function mouseClicked() {
  if (mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY < 400) {
    gameScreen();
  }
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
    startButton();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}
