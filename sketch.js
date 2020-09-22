const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, ground;
function setup(){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var groundoption = {
isStatic: true
}
ground = Bodies.rectangle(200,390,400,5,groundoption);
World.add(world,ground);
var balloption = {
  restitution : 1
} 
ball = Bodies.circle(100,200,20,balloption);
World.add(world,ball);
} 

function draw(){
background("black");
Engine.update(engine);
ellipse(ball.position.x,ball.position.y,20,20);
rect(ground.position.x,ground.position.y,400,5);
}
