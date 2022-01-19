import { getInputDirection } from "./input.js";

export const snakeSpeed = 4.4;
let newSegments = 0
const snakeBody = [{ x: 15, y: 15 }];

//checking if the player is dead or longer or whatever
export function update() {
  addSegments()
    const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
      snakeBody[i + 1] = {...snakeBody[i]}
  }
 
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
  

}
// reflecting changes in the dom
export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div")
    // add the snake class to the area thats in the snakeBody array
    snakeElement.style.gridRowStart = segment.y  //row is horizontal
    snakeElement.style.gridColumnStart = segment.x // collum is vertical
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  });
}
export function growSnake(amount) {
newSegments += amount
}
export function onSnake(position) {
return snakeBody.some(segment => {
    return equalPositions(segment, position)
})
}
function equalPositions (pos1, pos2) {
return(pos1.x === pos2.x && pos1.y === pos2.y) 
// if this is true this function returns true
}
function addSegments() {
for (let i = 0; i < newSegments; i++ ) {
  snakeBody[snakeBody.length] = {...snakeBody[snakeBody.length - 1]}
}
newSegments = 0
}