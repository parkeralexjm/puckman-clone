// ! Elements

// Player and High score display
const playerNameDisplay = document.getElementById("player-name");
const currentScoreDisplay = document.getElementById("current-score-display");
const highScoreDisplay = document.getElementById("high-score-display");

// Splash page
const splashDisplay = document.getElementById("splash");

// main wrapper
const gridWrapper = document.getElementById("grid-wrapper");

// Lives and Bonus score display
const livesDisplay = document.getElementById("lives");
const bonusDisplay = document.getElementById("bonus");

// Background
const backgroundDisplay = document.querySelector("main");
const readyDisplay = document.getElementById("ready");

const audio = document.createElement("audio");

// ! Variables
// Maze size and empty array
const width = 28;
const height = 31;
const gridSize = width * height;
let gridReference = [];
// Go through each tile of the maze and assign it a value that can be referenced later
const mazeLayout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 2, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 3, 3, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 3, 3, 3, 3, 3, 3, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 1, 3, 3, 3, 3, 3, 3, 1, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 3, 3, 3, 3, 3, 3, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
  1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 1,
  1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
  1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
// pellet = 0
// wall = 1
// power pellet = 2
// ghost pen = 3
// blank = 4

let currentScore = 0;
let highScore = 0;
let lives = 3;
let ghosts = ["binky", "inky", "pinky", "clyde"];
let pelletCount = 240; // 240 with power pellets

// Interval initialisation
let ghostInterval;
let backgroundInterval;
let exitInterval;

// Set the initial positions for pacman and the ghosts
let positions = {
  pacman: 657,
  binky: 321,
  inky: 404,
  pinky: 406,
  clyde: 408,
};
// ghosts.map((ghost) => {
//   let ghostAttributes = {}
//   ghostAttributes.name = ghost
//   ghostAttributes.upImage
//   ghostAttributes.downImage
//   ghostAttributes.leftImage
//   ghostAttributes.rightImage
// })

// let bonus = [
//   { name: "cherry", value: 100 },
//   { name: "strawberry", value: 300 },
//   { name: "orange", value: 500 },
//   { name: "apple", value: 700 },
//   { name: "melon", value: 1000 },
//   { name: "galaxian", value: 2000 },
//   { name: "bell", value: 3000 },
//   { name: "key", value: 5000 },
// ];

// Game speed (feed this in as the variable in intervals)
let gameSpeed = 300;

// Keycodes for arrows and wasd
const up = [38, 87];
const down = [40, 83];
const left = [37, 65];
const right = [39, 68];

// ! Page Load

livesDisplay.innerHTML = "CREDIT 1";
playerNameDisplay.innerHTML = "1UP";
scoreUpdate();

// ! Executions
function mazeGenerator() {
  // Create a grid with the variable gridSize and display their number inside
  gridReference = [];
  for (i = 0; i < gridSize; i++) {
    let gridItem = document.createElement("div");
    // Give all the item a class of gridItem
    gridItem.classList.add("gridItem");
    // Display the grid number on the item
    gridItem.id = i;
    // gridItem.style.fontSize = "0.8rem";
    // Use the layout to initialise the pellets, power pellets and starting positions
    if (mazeLayout[i] === 0) {
      gridItem.classList.add("pellet");
    } else if (mazeLayout[i] === 2) {
      gridItem.classList.add("power-pellet");
    }

    gridItem.style.width = `${100 / width}%`;
    gridItem.style.height = `${100 / width}%`;
    // Push the item to the gridReference (might be unecessary)
    gridReference.push(gridItem);
    gridWrapper.append(gridItem);
  }
  // For each character in positions add a class to its starting position
  for (const [key, value] of Object.entries(positions)) {
    addCharacter(value, key);
  }
}

function scoreUpdate(amount = 0) {
  currentScoreDisplay.innerHTML = currentScore += amount;
  highScoreDisplay.innerHTML = highScore > currentScore ? highScore : currentScore; // Function this later
  // setInterval(() => {
  //   playerNameDisplay.style.opacity = playerNameDisplay.style.opacity == 0 ? 1 : 0;
  // }, 500);
}

function livesUpdate(lostLife = 0) {
  lives -= lostLife;
  livesDisplay.innerHTML = lives;
}

function bonusUpdate() {
  // bonus.push(fruit)
  bonusDisplay.classList.add("cherry");
}

function gameIntro() {
  splashDisplay.style.display = "none";
  mazeGenerator();
  livesUpdate();
  bonusUpdate();
  audio.src = "sounds/pacman_beginning.wav";
  // audio.play();
  setTimeout(gameStart, 0);
}

function gameStart() {
  console.log("Game started");
  document.addEventListener("keydown", movePacman);
  moveGhost("binky");
  audio.src = "sounds/pacman_chomp.wav";
  setTimeout(moveGhost("inky"), 5000);
  setTimeout(moveGhost("pinky"), 10000);
  setTimeout(moveGhost("clyde"), 15000);
}

function addCharacter(position, character) {
  gridReference[position].classList.add(character);
}

function removeCharacter(character) {
  gridReference[positions[character]].classList.remove(character);
}

function movePacman(event) {
  const key = event.keyCode;
  movementManager(key, "pacman");
  const currentPosition = document.getElementById(positions.pacman);
  if (currentPosition.classList.contains("pellet")) {
    currentPosition.classList.remove("pellet");
    pelletCount--;
    if (pelletCount === 0) {
      endScreen();
    }
    scoreUpdate(100);
    audio.play();
  }
}

// Logic for 'random' ghost movement
function moveGhost(ghost) {
  ghostInterval = setInterval(() => {
    const directions = [...up, ...down, ...left, ...right];
    let randomNumber = Math.floor(Math.random() * 8);
    movementManager(directions[randomNumber], ghost);
  }, gameSpeed);
}

function movementManager(key, character) {
  removeCharacter(character);
  if (
    up.includes(key) &&
    positions[character] >= width &&
    mazeLayout[positions[character] - width] !== 1 &&
    mazeLayout[positions[character] - width] !== 3
  ) {
    positions[character] -= width;
  } else if (
    down.includes(key) &&
    gridSize - 1 >= positions[character] + width &&
    mazeLayout[positions[character] + width] !== 1 &&
    mazeLayout[positions[character] + width] !== 3
  ) {
    positions[character] += width;
  } else if (
    left.includes(key) &&
    positions[character] % width !== 0 &&
    mazeLayout[positions[character] - 1] !== 1 &&
    mazeLayout[positions[character] - 1] !== 3
  ) {
    positions[character]--;
  } else if (
    right.includes(key) &&
    positions[character] % width !== width &&
    mazeLayout[positions[character] + 1] !== 1 &&
    mazeLayout[positions[character] + 1] !== 3
  ) {
    positions[character]++;
  }
  // console.log("invalid key")
  addCharacter(positions[character], character);
  collisionCheck();
}

// If pacman eats all the pellets
function endScreen() {
  // Clear all the grid classes
  document.removeEventListener("keydown", movePacman);
  gridWrapper.innerHTML = "";
  // Stop ghost movement
  clearInterval(ghostInterval);
  pelletCount = 240;
  positions = {
    pacman: 657,
    binky: 321,
    inky: 404,
    pinky: 406,
    clyde: 408,
  };
  // Flash the background white and blue
  backgroundDisplay.style.filter = "invert(0)";
  flashBackground();
  backgroundDisplay.style.filter = "invert(0)";
  // Increment the difficulty
  gameSpeed += 50;
  // regenerate the board
  setTimeout(() => {
    mazeGenerator();
    readyDisplay.style.display = "block";
  }, 3500);
  setTimeout(() => {
    gameStart();
    readyDisplay.style.display = "none";
  }, 4500);
}

function flashBackground(repeats = 7) {
  if (repeats > 0) {
    backgroundDisplay.style.filter =
      backgroundDisplay.style.filter === "invert(0)" ? "invert(1)" : "invert(0)";
    setTimeout(() => flashBackground(repeats - 1), 500);
  }
}

function collisionCheck() {
  // console.log("collided?");
  if (
    positions.pacman === positions.binky ||
    positions.pacman === positions.inky ||
    positions.pacman === positions.pinky ||
    positions.pacman === positions.clyde
  ) {
    deathSequence();
  }
}

function deathSequence() {
  // game pauses
  document.removeEventListener("keydown", movePacman);
  clearInterval(ghostInterval);
  // play death animation (and plays a sound)
  audio.src = "sounds/pacman_death.wav";
  audio.play();
  deathAnimation();
  livesUpdate(1);
  if (lives > 0) {
    // Remake the screen but dont change the pellet classes or the count
    setTimeout(() => {
      for (const [key] of Object.entries(positions)) {
        removeCharacter(key);
      }
      resetPosition();
      for (const [key, value] of Object.entries(positions)) {
        addCharacter(value, key);
      }
      readyDisplay.style.display = "block";
    }, 1500);
    // Display the ready message for 1 second
    setTimeout(() => {
      gameStart();
      readyDisplay.style.display = "none";
    }, 2500);
  } else {
    readyDisplay.style.display = "block";
    readyDisplay.innerHTML = "GAME OVER";
    readyDisplay.style.color = "red";
    readyDisplay.style.left = "490px";
  }
}

function deathAnimation(repeats = 1) {
  if (repeats < 13) {
    document.getElementsByClassName(
      "pacman"
    )[0].style.backgroundImage = `url(/images/p-dead${repeats}.png)`;
    setTimeout(() => deathAnimation(repeats + 1), 110);
  } else {
    document.getElementsByClassName("pacman")[0].style.backgroundImage = "";
  }
}

function resetPosition() {
  positions = {
    pacman: 657,
    binky: 321,
    inky: 404,
    pinky: 406,
    clyde: 408,
  };
}

function leavePen(ghost) {
  if (ghost === "inky") {
  } else if (ghost === "clyde") {
  } else {
    // Must be binky or pinky
  }
}

// Timeout for ghosts staying inside the center

// Logic for collision between:
// * Pacman and pellet
// Pacman and power pellet - change ghost behaviour
// * Pacman and walls
// * Ghosts and walls
// Pacman and bonuses
// Pacman and Ghosts (scared) gain points and move ghost back to start
// * Pacman and Ghosts (chase) lose life

// Game over when lost 3 lives

// ! Events

// Start game on splash page
splashDisplay.addEventListener("click", () => {
  gameIntro();
});

// Trigger events on keypress see line 171

// * ----- STRETCH CONTENT -----

// Ghosts to have complex movement based on their name/'personality'

// Game to store the high score in the local machine

// Boards get more difficult:
// Game speeds up each time a screen is cleared
// Ghosts spend less time in 'scared' mode after power pellet

// Research timings for fruit appearing and score etc.

// Blinky - always takes the shortest path to pacman
// Pinky - tries to get to the point 4 spaces in front of pacman
// Inky
// Clyde - True random movement

// Make pacman have movement that is more consistent with the real game

// ? Multiple options to change the maze shape (ms Pacman)
