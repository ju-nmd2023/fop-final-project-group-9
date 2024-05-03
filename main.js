function setup() {
  createCanvas();
}

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
  } else if (state === "win") winScreen();
}


function draw ();