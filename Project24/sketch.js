var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground1,paper1
var box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1199,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	

	ground1 = new Ground(600,height,1200,20)

	box1 = new box(1091,640,20,100);
	box2 = new box(981,680,200,20);
	box3 = new box(873,640,20,100)
	paper1 = new paper(50,500,30)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.postition,{x:185,y:-175});
	}
}

