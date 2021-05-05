const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var BackgroundImg;
var backgroundImg;
var character1, characterImg;
var edges;
var engine, world;

function preload(){
  BackgroundImg = loadImage("snow2.jpg");
  characterImg =loadImage("too much excited.jpg");
}
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

 backgroundImg = createSprite(600, 400, 1200, 800);
 backgroundImg.addImage(BackgroundImg);

 character1 = createSprite(300,700, 50, 50);
 character1.addImage(characterImg);
 character1.scale = 0.05;

 //A matter body
 snow1 = new Snow(300,100,15)
 Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  if(keyCode === 32){
   character1.velocityY = -3;
  }
  character1.velocityY = character1.velocityY+0.5


  character1.collide(backgroundImg)
 
  drawSprites();
  snow1.display();
}  