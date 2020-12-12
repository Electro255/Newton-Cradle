var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof,roofObject;
var rope;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(600,650,1200,20);
	
	bobObject1 = new Bob(200,100);
	bobObject2 = new Bob(400,100);
	bobObject3 = new Bob(600,100);
	bobObject4 = new Bob(800,100);
	bobObject5 = new Bob(1000,100);

	rope = new Rope(roof.body,bobObject1.body);
	rope = new Rope(roof.body,bobObject2.body);
	rope = new Rope(roof.body,bobObject3.body);
	rope = new Rope(roof.body,bobObject4.body);
	rope = new Rope(roof.body,bobObject5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



