import { getInputDirection } from "./input.js";

export const snakeSpeed = 2.3;
const snakeBody = [{ x: 10, y: 10 }];

//checking if the player is dead or longer or whatever
export function update() {
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
