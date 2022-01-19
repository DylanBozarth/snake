import {snakeSpeed, update as snakeUpdate, draw as drawSnake} from './snake.js'
import { draw as drawFood, update as updateFood} from './food.js'
const gameBoard =   document.getElementById('gameBoard')
// game loop
let lastRenderTime = 0;

function gameLoop(currentTime) {
  window.requestAnimationFrame(gameLoop);
  const howManySeconds = (currentTime - lastRenderTime) / 1000;
  if (howManySeconds < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;
  
  update()
  draw()
}
window.requestAnimationFrame(gameLoop);
//checking if the player is dead or longer or whatever 
function update() {
snakeUpdate()
updateFood()
}
// reflecting changes in the dom
function draw() {
  gameBoard.innerHTML = ''
drawSnake(gameBoard)
drawFood(gameBoard)
}


