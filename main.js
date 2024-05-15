function setup() {
  createCanvas(1000, 800);
  frameRate(30);

  simbas.push(new Simba(500, 150));
  simbas.push(new Simba(200, 300));
  simbas.push(new Simba(700, 400));
  simbas.push(new Simba(350, 400));

  shots.push(new Shot(300, 150));
  shots.push(new Shot(120, 50));
  shots.push(new Shot(300, 450));
  shots.push(new Shot(900, 290));

  patches.push(new Patch(350, 300));
  patches.push(new Patch(610, 100));
  patches.push(new Patch(600, 450));
}

let state = "start";
let gameIsRunning = false;
let objects = [];

//timer
//line 9-17, this code was conducted from shecodes.io, 14th may 2024
// let timerIsRunning = false;

let count = 60;
let countStarted = false;

function preload() {
  objects[0] = loadImage("images/donk.png");
  objects[1] = loadImage("images/girllife.png");
  objects[2] = loadImage("images/shot.png");
  objects[3] = loadImage("images/simba.png");
}

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
  donkImg = loadImage("images/donk.png");
  patchImg = loadImage("images/girllife.png");
  shotImg = loadImage("images/shot.png");
  simbaImg = loadImage("images/simba.png");
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

//-----CLASSES
//class for hi life character
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
  draw() {
    image(playerImg, this.x, this.y, 40, 80);
  }
}

let player = new Player(930, 190);

//class for donk
class Donk {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    image(donkImg, this.x, this.y, 40, 60);
  }
}
let donk = new Donk(755, 10);

let simbas = [];
//Clas  for simba
class Simba {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    image(simbaImg, this.x, this.y, 30, 70);
  }
}
let simba = new Simba();

let shots = [];
//class for shot
class Shot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    image(shotImg, this.x, this.y, 30, 40);
  }
}
let shot = new Shot();

let patches = [];
//class for patch
class Patch {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    image(patchImg, this.x, this.y, 40, 40);
  }
}
let patch = new Patch();

//functions for icons and characters
//let x = 400;

//screens
function startScreen() {
  if (state === "start") {
    image(startImg, 0, 0);
  }
}

function gameScreen() {
  if (state === "game") {
    countStarted = false;
    if (countStarted === true) {
      startCountDown();
    }
    image(akaImg, 0, 0);
    // image(hilifeImg, 600, 50, 70, 140);
    image(character2, 200, 100, 40, 80);
    image(character3, 700, 280, 40, 80);
    image(character4, 500, 250, 40, 80);
    image(character5, 100, 300, 40, 80);
    /* image(playerImg, 950, 300, 40, 80); */
  }
}
function startCountDown() {
  countStarted = false;
  setInterval(timer, 1000);
  function timer() {
    // console.log("hello");
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

let frames = 0;
function draw() {
  if (state === "start") {
    startScreen();
    startButton();
  } else if (state === "game") {
    frames++;
    if (frames >= 30) {
      count--;
      frames = 0;
    }
    gameScreen();
    if (count > 0) {
      text(count, 75, 480);
      textSize(40);
    } else {
      text("Game Over", width / 2, height / 2);
    }

    //functions for patch
    //functions for donk
    donk.draw();
    //functions for simba
    for (let simba of simbas) {
      simba.draw();
    }

    for (let shot of shots) {
      shot.draw();
    }

    for (let patch of patches) {
      patch.draw();
    }

    //functions for shot
    //functions for hilife
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

    //functions for player character
    player.draw();
    let velocity = 5;

    //upper key
    if (keyIsDown(38) && player.y - velocity >= 0) {
      player.y -= velocity;
    }
    //key code 40= arrow down
    //if arrow down is pressed, the car will move backwards
    else if (keyIsDown(40) && player.y + velocity <= 480) {
      player.y += velocity;
    }

    //right
    else if (keyIsDown(37) && player.x - velocity >= 0) {
      player.x -= velocity;
    }

    //left
    else if (keyIsDown(39) && player.x + velocity <= 970) {
      player.x += velocity;
    }
    //game states
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}
