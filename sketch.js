
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;
var blower;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;

  
 blower=new Blower(200,100,50,50);

}

f
function draw() {
  
  background(255,255,255);
  Engine.update(engine);
  blower.show();
  drawSprites();
    
}