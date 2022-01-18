export const snakeSpeed = 1.4;
const snakeBody = [{ x: 10, y: 10 }];

//checking if the player is dead or longer or whatever
export function update() {
  console.log("updating");
}
// reflecting changes in the dom
export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div")
    snakeElement.style.gridRowStart = segment.x
    snakeElement.style.gridColumnStart = segment.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  });
}
