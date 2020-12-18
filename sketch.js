var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1100, 200, thickness, height / 2);

  bullet = createSprite(250,200,20,20);
 
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet.velocityX = speed;
}

function draw() {
  background("black");  




if(bullet.collide(wall)) {
  
  var damage = 0.5 * weight * speed *speed/(thickness *thickness *thickness);

console.log (damage);
if(damage>10)
{
  wall.shapeColor = color(255,0,0);
}

if (damage<10){
  wall.shapeColor = ("green");
}
}

bullet.shapeColor = ("white");

  drawSprites();
}

function hasCollided(bullet,wall) {
 
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}