const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var object;
var ball;

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;


  var object_options={

isStatic:true

  }
  object=Bodies.rectangle(200,390,200,20,object_options);
  World.add(world,object);
 
console.log(object);
var ball_options={
restitution:1.0

}
 ball=Bodies.rectangle(200,100,20,20,ball_options);
 World.add(world,ball);
}
function draw()
{
  Engine.update(engine);
  background(0);
 rectMode(CENTER);

 rect(object.position.x,object.position.y,200,30);
rect(ball.position.x,ball.position.y,20,20)
    
  
}
