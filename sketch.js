const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
box1 = new Box(120,021,201,102);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
box1.display();
  
}