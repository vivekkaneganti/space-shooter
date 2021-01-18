var shooter;
var asteroid;
var backgroundImage;
var spaceship;
var asteroidImage;
var lives = 5;
var gameState = "play";

var asteroidsGroup;

function preload() {
  backgroundImage = loadImage("backgroundimg.png");
  spaceship = loadImage("shooter2.png");
  asteroidImage = loadImage("asteroid2.png");
}
function setup() {
  createCanvas(1350,650);
  shooter = createSprite(250,300,100,100);
  shooter.addImage(spaceship);
  shooter.scale = 0.3;
  asteroidsGroup = new Group();
}

function draw() {
  background(backgroundImage);  
  shooter.x = mouseX;
  shooter.y = mouseY;
  textSize(24);
  text("Lives: "+lives,20,20);
  spawnAsteroids();
  if (shooter.isTouching(asteroidsGroup)) {
    lives=lives-1;
    asteroidsGroup.destroyEach();
    gameState = "end";
  }
  if (gameState==="end") {
    asteroidsGroup.setVelocityXEach=0;
    
  }
  drawSprites();
}

function spawnAsteroids() {
  if (frameCount%100==0) {
    asteroid = createSprite(1350 ,300,25,25);
    asteroid.addImage(asteroidImage);
    asteroid.scale = 0.15;
    asteroid.y=Math.round(random(50,600));
    asteroid.velocityX = -2;
    asteroid.lifetime = 675;
    asteroidsGroup.add(asteroid);
  }
}