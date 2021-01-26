var paper
var dustbin
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);
    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	paper = new Paper(200,600,30)


	Engine.run(engine);
	box1 = new Box(600,620,20,100)
	box2 = new Box(800,620,20,100)
	box3 = new Box(700,660,200,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill ("pink");
  drawSprites();
  box3.display()
  paper.display()
 box1.display()
 box2.display()

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:30 ,y:-30})
	   
	 }
   }

