// ! Elements

// header > player & highscore
const playerNameDisplay = document.getElementById("player-name");
const currentScoreDisplay = document.getElementById("current-score-display");
const highScoreDisplay = document.getElementById("high-score-display");

// Splash page
const splashDisplay = document.getElementById("splash");

// main wrapper
const gridWrapper = document.getElementById("grid-wrapper");

// footer > lives & bonus icons
const livesDisplay = document.getElementById("lives");
const bonusDisplay = document.getElementById("bonus");

// ! Variables

// Maze size and empty array
const width = 28;
const height = 31;
const gridSize = width * height;
const gridReference = [];
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
  1, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 1,
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

// ! Page Load

// Load the splash page
mazeGenerator();
scoreUpdate();
livesUpdate();
bonusUpdate();

playerNameDisplay.innerHTML = "1UP";
currentScoreDisplay.innerHTML = currentScore;
highScoreDisplay.innerHTML = highScore > currentScore ? highScore : currentScore; // Function this later

// ! Executions
// Grid generation
function mazeGenerator() {
  // Create a grid with the variable gridSize and display their number inside
  for (i = 0; i < gridSize; i++) {
    let gridItem = document.createElement("div");
    // Give all the item a class of gridItem
    gridItem.classList.add("gridItem");
    // Display the grid number on the item

    if (mazeLayout[i] === 0) {
      gridItem.classList.add("pellet");
    } else if (mazeLayout[i] === 2) {
      gridItem.classList.add("power-pellet");
    }
    // Set the width to be a percentage of the width
    gridItem.style.width = `${100 / width}%`;
    // Set the width to be a percentage of the height
    gridItem.style.height = `${100 / width}%`;
    gridReference.push(gridItem);
    gridWrapper.append(gridItem);
  }
}

function scoreUpdate() {
  currentScoreDisplay.innerHTML = currentScore;
  highScoreDisplay.innerHTML = highScore > currentScore ? highScore : currentScore; // Function this later
}

function livesUpdate() {
  lives--;
  livesDisplay.innerHTML = lives;
}

function bonusUpdate() {
  // bonus.push(fruit)
  bonusDisplay.innerHTML = "cherry";
}

// Timeout for ghosts staying inside the center

// Functions for keypress movement (use keydown?)
// set interval

// Logic for 'random' ghost movement

// Logic for collision between:
// Pacman and pellet
// Pacman and power pellet - change ghost behaviour
// Pacman and walls
// Ghosts and walls
// Pacman and bonuses
// Pacman and Ghosts (scared) gain points and move ghost back to start
// Pacman and Ghosts (chase) lose life

// Eat all the pellets => generate a new screen with a pop up.

// Adding, removing and moving classes to grid items

// Game over when lost 3 lives

// ! Events

// start game on splash page

// keypress

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

// ? Multiple options to change the maze shape (ms Pacman)
