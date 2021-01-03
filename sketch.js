//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var object,object2;
function setup() {
  createCanvas(400,400)
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true
  }

  var object_options2 = {
    restitution: 0.8
  }
  object = Bodies.rectangle(200, 390, 400, 50, object_options);
  object2 = Bodies.circle(200, 100, 20,object_options2);
  World.add(world, object2)
  World.add(world, object)
  
  console.log("This is: ", object)
  // console.log("X position is: ", object.position.x);
  // console.log("Type: ", object.type)
}

function draw() {
  background("pink");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 400, 50);
  ellipseMode(RADIUS);
  ellipse(object2.position.x,object2.position.y,20,20)
}