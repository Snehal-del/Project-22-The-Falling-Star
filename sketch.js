const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var fairy, fairyImage;
var star, starImage; 
var bg, bgImage;
var music;
var canvas;

var engine;
var world;
var fairyBody, starBody;

function preload() {
   
   fairyImage = loadAnimation("images/fairy1.png");
   bgImage = loadAnimation("images/starnight.png");
   starImage = loadAnimation("images/star.png");

   music = loadSound("sound/JoyMusic.mp3");

}

function setup() {
canvas = createCanvas(800, 750);
  
engine = Engine.create();
world = engine.world;

var fairyBody_attributes = {
  isStatic : true
}

fairyBody = Bodies.rectangle(400, height - 200, 100, 200, fairyBody_attributes);
World.add(world, fairyBody);
console.log(fairyBody);

fairy = createSprite(236, height - 200, 10 ,10);
fairy.addAnimation("Fairy", fairyImage);
fairy.scale = 0.2;

var starBody_attributes = {
 
isStatic : true
}

starBody = Bodies.rectangle(500, 100 , 50, 50, starBody_attributes);
World.add(world, starBody);
console.log(starBody);

star = createSprite(300, 580, 10, 10);
star.addAnimation("Star", starImage);
star.scale = 0.2;

bg = createSprite(width/2, height/2, 10, 19);
bg.addAnimation("Background", bgImage);
bg.scale = 1.2;
bg.depth = fairy.scale - 1;

}


function draw() {
  background("black");

  Engine.update(engine);

fairy.x = fairyBody.position.x;
fairy.y = fairyBody.position.y;

if(keyCode === LEFT_ARROW) {

  fairyBody.position.x = fairyBody.position.x - 5;
  }
  
  if(keyCode === RIGHT_ARROW) {
  
    fairyBody.position.x = fairyBody.position.x + 5;
    }
  

star.x = starBody.position.x;
star.y = starBody.position.y;

if(keyCode === DOWN_ARROW) {

Matter.Body.setStatic(starBody, false);  

}

 if(star.y > fairy.y - 40) {
  Matter.Body.setStatic(starBody, true);   
} 

 drawSprites();
}
