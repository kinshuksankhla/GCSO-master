var car,wall; 

var speed,weight;

function setup() {

  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
car.shapeColor = "white"
car.velocityX = Math.round(random(55,90));


wall = createSprite(1400,200,60,height/2);
wall.shapeColor = "green";


weight = random(400,1500)
}

function draw() {
  background("black");  
  
  if(wall.x - car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    var wreck = 0.5 * weight * speed * speed/22509;

    if(wreck > 180)
    {
      car.shapeColor = "red";
    }
    if(wreck < 180 && wreck > 100)
    {
      car.shapeColor = "yellow";
    }
    if(wreck < 100)
    {
      car.shapeColor = "lime";
    }
  }

  drawSprites();
}