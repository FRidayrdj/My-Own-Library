var fixedRect, movingRect;
function setup() 
{
  createCanvas(1200,800);
  fixedRect= createSprite(800, 200, 50, 80);
  fixedRect.shapeColor='green';
  movingRect= createSprite(800,400,80,30);
  movingRect.shapeColor= 'green';
  movingRect.velocityY=-2;
  fixedRect.velocityY=2;

  
}


function draw() 
{
  background(0,0,0); 
  bounceOff(movingRect,fixedRect);

  if (isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor = 'red';
    fixedRect.shapeColor = 'red';
  }
  else
  {
    movingRect.shapeColor = 'green';
    fixedRect.shapeColor = 'green';
  }
  drawSprites();
}