// game loop
let lastRenderTime = 0;
const snakeSpeed = 1.4;
function gameLoop(currentTime) {
  window.requestAnimationFrame(gameLoop);
  const howManySeconds = (currentTime - lastRenderTime) / 1000;
  if (howManySeconds < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;
  console.log("wwww");
}
window.requestAnimationFrame(gameLoop);
