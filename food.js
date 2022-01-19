import {onSnake, growSnake} from './snake.js'
let food = {x: 1, y: 1}
const growthRate = 1
// check if snake is on food
export function update() {
  if (onSnake(food)) {
      growSnake(growthRate)
      food = {x: 15,y:15}
  }
}
// reflecting changes in the dom
export function draw(gameBoard) {
 
    const foodElement = document.createElement("div")
   
    foodElement.style.gridRowStart = food.y  //row is horizontal
    foodElement.style.gridColumnStart = food.x // collum is vertical
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
 
}
