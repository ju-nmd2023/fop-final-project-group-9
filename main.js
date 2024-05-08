function setup() {
  createCanvas(1000, 800);
}

let state = "start";
let gameIsRunning = false;

function preload() {
  //all images
  startImg = loadImage("images/startscreenn.jpg");
  akaImg = loadImage("images/akascreen.jpg");
  loseImg = loadImage("images/youlosescrenn.jpg");
  winImg = loadImage("images/winscreen.png");
  hilifeImg = loadImage("images/hilife.png");
  character2 = loadImage("images/character2.png");
  character3 = loadImage("images/character3.png");
  character4 = loadImage("images/character4.png");
  character5 = loadImage("images/character5.png");
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
  if (state === "start") {
    if (
      mouseX > 410 &&
      mouseX < 410 + 200 &&
      mouseY > 350 &&
      mouseY < 350 + 70
    ) {
      state = "game";
      // if (mouseX > 400 && mouseX < 600 && mouseY > 200 && mouseY < 400) {
      //state = "game";
    }
  }
}

//functions for icons and characters
let x = 600;
function hiLife() {
  image(hilifeImg, x, 50, 70, 140);

  /*   if (x < 830) {
    x = x + 2;
  } else {
    x = x - 2;
  } */

  if (x < 830) {
    x = x + 2;
  } else if (x > 830) {
    x = x - 2;
  }
}

//screens
function startScreen() {
  if (state === "start") {
    image(startImg, 0, 0);
  }
}

function gameScreen() {
  if (state === "game") {
    image(akaImg, 0, 0);
    // image(hilifeImg, 600, 50, 70, 140);
    hiLife();
    gameIsRunning = true;
  }
}

function loseScreen() {
  if (state === "lose") {
    image(loseImg, 0, 0);
  }
}

function winScreen() {
  if (state === "win") {
    image(winImg, 0, 0);
  }
}

function draw() {
  if (state === "start") {
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
