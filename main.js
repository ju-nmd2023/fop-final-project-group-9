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

  donks.push(new Donk(755, 10));
}

//----VARIABLES
let state = "start";
let gameIsRunning = false;

//player character
let velocity = 5;

//hilife character
let changeDirection;

//timer at start
let count = 30;
let countStarted = false;
let frames = 0;

//points at start
let currentPoint = 0;

//----end of variables

function preload() {
  //all images
  startImg = loadImage("images/startscreenn.jpg");
  akaImg = loadImage("images/akascreen.jpg");
  loseImg = loadImage("images/youlosescreenn.jpg");
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

//------FUNCTIONS
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

function retryButton() {
  push();
  let x = 200;
  let y = 70;

  fill(0);
  stroke(247, 247, 5);
  strokeWeight(5);
  rect(410, 350, x, y);
  textSize(20);
  text("Retry", 480, 390);

  pop();
}

function startAgainButton() {
  push();
  let x = 200;
  let y = 70;

  fill(0);
  stroke(247, 247, 5);
  strokeWeight(5);
  rect(410, 350, x, y);
  textSize(20);
  text("Start Again", 460, 390);

  pop();
}

//timer
function timerBox() {
  push();
  noStroke();
  fill(255, 190, 25);
  circle(80, 480, 130);
  pop();
}

function startCountDown() {
  countStarted = false;
  setInterval(timer, 1000);
  function timer() {}
}
// end of timer

function pointBox() {
  push();
  noStroke();
  fill(0);
  circle(920, 480, 130);
  pop();
}

function points() {
  push();
  fill(255, 190, 25);
  text(currentPoint, 900, 495);
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
    }
  }

  //retrybutton
  if (state === "lose") {
    if (
      mouseX > 410 &&
      mouseX < 410 + 200 &&
      mouseY > 350 &&
      mouseY < 350 + 70
    ) {
      state = "game";
      count = 30;
      currentPoint = 0;
      player.x = playerX;
      player.y = playerY;
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

      donks.push(new Donk(755, 10));
    }
  }

  //startagain button
  if (state === "win") {
    if (
      mouseX > 410 &&
      mouseX < 410 + 200 &&
      mouseY > 350 &&
      mouseY < 350 + 70
    ) {
      state = "game";
      count = 30;
      currentPoint = 0;
      player.x = playerX;
      player.y = playerY;
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

      donks.push(new Donk(755, 10));
    }
  }
}

//----End of functions

//-----CLASSES
//class for hi life character
class Hilife {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 120;
  }
  draw() {
    image(hilifeImg, this.x, this.y, this.width, this.height);
  }
}

let hilife = new Hilife(600, 60);

//class for Player
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 80;
  }
  draw() {
    image(playerImg, this.x, this.y, this.width, this.height);
  }
}

let playerX = 930;
let playerY = 190;

let player = new Player(playerX, playerY);

//class for transparent bar
class Bar {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw() {
    rect(this.x, this.y, this.width, this.height);
    noFill();
    stroke(0);
    strokeWeight(2);
  }
}
let bar = new Bar(0, 0, 98, 290);

//class for donk
class Donk {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 60;
  }
  draw() {
    image(donkImg, this.x, this.y, this.width, this.height);
  }
}
let donk = new Donk();

//class  for simba
class Simba {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 70;
  }
  draw() {
    image(simbaImg, this.x, this.y, 30, 70);
  }
}
let simba = new Simba();

//class for shot
class Shot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 40;
  }
  draw() {
    image(shotImg, this.x, this.y, this.width, this.height);
  }
}
let shot = new Shot();

//class for patch
class Patch {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
  }
  draw() {
    image(patchImg, this.x, this.y, this.width, this.height);
  }
}
let patch = new Patch();

// empty arrays for objects
let donks = [];
let simbas = [];
let shots = [];
let patches = [];

//-----SCREEN FUNCTIONS
function startScreen() {
  if (state === "start") {
    image(startImg, 0, 0);
  }
}

function gameScreen() {
  if (state === "game") {
    if (countStarted === true) {
      startCountDown();
    }
    image(akaImg, 0, 0);
    image(character2, 200, 100, 40, 80);
    image(character3, 700, 280, 40, 80);
    image(character4, 500, 250, 40, 80);
    image(character5, 100, 300, 40, 80);
  }
}

function loseScreen() {
  if (state === "lose") {
    image(loseImg, 0, 0);
    retryButton();
  }
}

function winScreen() {
  if (state === "win") {
    image(winImg, 0, 0);
    startAgainButton();
    image(playerImg, 100, 200, 150, 280);
  }
}

//----FUNCTION DRAW
function draw() {
  if (state === "start") {
    startScreen();
    startButton();
  } else if (state === "game") {
    //timer logic
    frames++;
    if (frames >= 30) {
      count--;
      frames = 0;
    }
    gameScreen();
    timerBox();
    pointBox();
    points(0);
    //timer logic
    if (count > 0) {
      text(count, 55, 495);
      textSize(50);
    } else {
      state = "lose";
    }

    //functions for bar
    bar.draw(bar.x, bar.y, bar.width, bar.height);
    if (
      player.x + player.width >= bar.x &&
      player.x <= bar.x + bar.width &&
      player.y + player.height >= bar.y &&
      player.y <= bar.y + bar.height
    ) {
      player.x += velocity;
    }

    //functions for donk
    for (donk of donks) {
      donk.draw();
      if (
        player.x + player.width >= donk.x &&
        player.x <= donk.x &&
        player.y + player.height >= donk.y &&
        player.y <= donk.y
      ) {
        donks.splice(donks.indexOf(simba), 1);
        currentPoint += 50;
        points();
      }
    }

    //functions for simba
    for (let simba of simbas) {
      simba.draw();
      if (
        player.x + player.width >= simba.x &&
        player.x <= simba.x &&
        player.y + player.height >= simba.y &&
        player.y <= simba.y
      ) {
        simbas.splice(simbas.indexOf(simba), 1);
        currentPoint += 20;
        points();
      }
    }

    //functions for shots
    for (let shot of shots) {
      shot.draw();
      if (
        player.x + player.width >= shot.x &&
        player.x <= shot.x &&
        player.y + player.height >= shot.y &&
        player.y <= shot.y
      ) {
        shots.splice(shots.indexOf(shot), 1);
        currentPoint += 10;
        points();
      }
    }

    //functions for patches
    for (let patch of patches) {
      patch.draw();
      if (
        player.x + player.width >= patch.x &&
        player.x <= patch.x &&
        player.y + player.height >= patch.y &&
        player.y <= patch.y
      ) {
        patches.splice(patches.indexOf(patch), 1);
        currentPoint += 10;
        points();
      }
    }

    //hilife collision
    if (
      player.x + player.width >= hilife.x &&
      player.x <= hilife.x &&
      player.y + player.height >= hilife.y &&
      player.y <= hilife.y
    ) {
      state = "lose";
    }

    //hilife movement
    hilife.draw();
    if (changeDirection === false && hilife.x === 600) {
      hilife.x += 2;
    }

    if (hilife.x === 600) {
      changeDirection = false;
    } else if (hilife.x === 800) {
      changeDirection = true;
      hilife.x = hilife.x - 2;
    } else if (changeDirection === false) {
      hilife.x = hilife.x + 2;
    } else if (changeDirection === true) {
      hilife.x = hilife.x - 2;
    }

    //player movement
    player.draw();

    //arrow up = 38
    if (keyIsDown(38) && player.y - velocity >= 0) {
      player.y -= velocity;
    }
    //arrow down = 40
    else if (keyIsDown(40) && player.y + velocity <= 480) {
      player.y += velocity;
    }

    //arrow right = 37
    else if (keyIsDown(37) && player.x - velocity >= 0) {
      player.x -= velocity;
    }

    //arrow left = 39
    else if (keyIsDown(39) && player.x + velocity <= 970) {
      player.x += velocity;
    }

    //winning at 200 points
    if (currentPoint >= 200) {
      state = "win";
    }
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}
