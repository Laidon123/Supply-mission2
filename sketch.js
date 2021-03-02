
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,bin,ground,box,box1,box2

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	ground=new Ground(600,395,1200,10)
	 paper=new Ball(200,200,20)
	 box=new Box1(900,350,10,80)
	 box1=new Box1(1000,350,10,80)
	 box2=new Box(950,345,90,10)
	 console.log(paper)
   
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display()
  paper.display()
  box.display()
  box1.display()
  box2.display()
  drawSprites();
 
}


function keyPressed(){

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position, {x:70,y:-85})
	}
}



