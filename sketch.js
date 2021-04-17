const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject
var world, paperObject,  paperImg;
 


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	groundObject = new Ground(width / 2, 670, width, 20);
	dustbinObj = new Dustbin(1200, 650);
	paperObject =new Paper(260, 210, 75, 75)
	
 
	Engine.run(engine);

	KeyPressed = new Group();

}


function draw() {
	rectMode(CENTER);
	background(230);

	groundObject.display();
	dustbinObj.display();
	paperObject.display();

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 130, y: -145 })

	}
 
	//KeyPressed();
	drawSprites();

}
