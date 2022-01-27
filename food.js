import {onSnake, growSnake} from './snake.js'
let food = newGridPosition()
const growthRate = 1


// check if snake is on food
export function update() {
  if (onSnake(food)) {
      growSnake(growthRate)
      food = newGridPosition()
      
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
function foodPosition () {
  let newFoodPosition = ''
while (newFoodPosition === null || onSnake(foodPosition)) {
  newFoodPosition = newGridPosition()
}

}
function newGridPosition() {
  return {
    x: Math.floor(Math.random()*29+1),y:Math.floor(Math.random()*29+1)
  }
}