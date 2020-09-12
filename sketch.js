var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceoff(movingRect,fixedRect);
  drawSprites();
}
function bounceoff (Object1,Object2) {
if (Object1.x - Object2.x < Object1.width/2 + Object2.width/2
    && Object2.x - Object1.x < Object1.width/2 + Object2.width/2){
  Object2.velocityX = Object2.velocityX * (-1);
  Object1.velocityX = Object1.velocityX * (-1);
}
if (Object1.y - Object2.y < Object1.height/2 + Object2.height/2
  && Object2.y - Object1.y < Object1.height/2 + Object2.height/2){
  Object2.velocityY = Object2.velocityY * (-1);
  Object1.velocityY = Object1.velocityY * (-1);
}
}