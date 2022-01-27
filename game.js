import {snakeSpeed, update as snakeUpdate, draw as drawSnake, snakeCannibal, getSnakePosition} from './snake.js'
import { draw as drawFood, update as updateFood} from './food.js'

const gameBoard =   document.getElementById('gameBoard')
// game loop
let lastRenderTime = 0;

let gameOver = false
function gameLoop(currentTime) {
  if (gameOver) {
    if (confirm('aw shucks')) {
      window.location = '/'
    }
    return
  }
  window.requestAnimationFrame(gameLoop);
  const howManySeconds = (currentTime - lastRenderTime) / 1000;
  if (howManySeconds < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;
  
  update()
  draw()
}
window.requestAnimationFrame(gameLoop);
//updating position and status 
function update() {
snakeUpdate()
updateFood()
deadOrAlive()
}
// reflecting changes in the dom
function draw() {
  gameBoard.innerHTML = ''
drawSnake(gameBoard)
drawFood(gameBoard)

}
//DEAD OR NOT 
function deadOrAlive() {
  gameOver = outsideGrid(getSnakePosition()) || snakeCannibal()
 }
let gridSize = 30
 export function outsideGrid(position) {
  return (
    position.x < 1 || position.x > gridSize ||
    position.y < 1 || position.y > gridSize
  )
}