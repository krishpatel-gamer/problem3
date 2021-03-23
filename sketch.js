
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 tree = new Tree(450,170,190,130);
 boy = new object(120,450,60,150);
 stone = new Stone(190,400,7);
 sling = new Sling(stone.body,{x:90,y:367});
 mango1 = new Mango(500,200,6);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();

  tree.display();
  boy.display();
  stone.display();
  sling.display();
  mango1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
sling.fly();

}



