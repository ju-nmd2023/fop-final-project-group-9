function setup() {
  createCanvas(1000, 800);
}
<<<<<<< HEAD
/* 
let startImg = document.createElement("img");
image.src = "images/Startscreen.png";
document.body.appendChild(image); */
// let container = document.getElementById("image-container");
// container.appendChild(startImg);
=======

function preload() {
  startImg = loadImage("images/Startscreen.png");
}
>>>>>>> 9828c57eaba903b61d8cc8a439e293607b6de3dc

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
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}
