var shooter;
var asteroid;


function setup() {
  createCanvas(1350,650);
  shooter = createSprite(250,300,100,100);
}

function draw() {
  background("black");  
  shooter.x = mouseX;
  shooter.y = mouseY;
  spawnAsteroids();
  drawSprites();
}

function spawnAsteroids() {
  if (frameCount%100==0) {
    asteroid = createSprite(1350 ,300,25,25);
    asteroid.velocityX = -2;
  }
}