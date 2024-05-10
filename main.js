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
  playerImg = loadImage("images/gameplayer.png");
  shotImg = loadImage("images/shot.png");
  drinkImg = loadImage("images/simba.png");
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

class Hilife {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    image(hilifeImg, this.x, this.y, 70, 140);
  }
}

let hilife = new Hilife(600, 60);
let changeDirection;

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

/* function draw() {
  clear();
  hilife.draw();
  hilife.x += 1;
} */

//functions for icons and characters
//let x = 400;
/* function hiLife() {
  image(hilifeImg, x, 50, 70, 140);

  changeDirection = true;

    if (hilife.x <= 600) {
      changeDirection = false;
    }
  
    if (changeDirection == false) {
      hilife.x = hilife.x + 2;
    } else if (changeDirection == true) {
      hilife.x = hilife.x - 2;
    } 

 */

function player() {
  image(playerImg, 950, 300, 40, 80);
  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
    }
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
    player();
    image(character2, 200, 100, 40, 80);
    image(character3, 700, 280, 40, 80);
    image(character4, 500, 250, 40, 80);
    image(character5, 100, 300, 40, 80);
    image(playerImg, 950, 300, 40, 80);
    gameIsRunning = true;
  }
}

if (player. === )

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
    hilife.draw();
    hilife.x += 2;
    if (hilife.x === 600) {
      changeDirection = false;
    } else if (hilife.x === 800) {
      changeDirection = true;
    } else if (changeDirection == false) {
      hilife.x = hilife.x + 2;
    } else if (changeDirection == true) {
      hilife.x = hilife.x - 2;
    }
    // if (hilife.x > 830) {
    // hilife.x = -1;
    // }
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}
