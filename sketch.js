
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var laser1
var ground1,ground2
var cannon1
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	laser1=new Laser(400,400,50)
    cannon1=new Cannon(polygon1.body,{x:100,y:350});
	ground1= new Ground(500,400,240,20)
	ground2= new Ground(500,650,1000,20)
	box1=new Box(500,360,30,40)
	box2=new Box(470,360,30,40)
	box3=new Box(440,360,30,40)
	box4=new Box(410,360,30,40)
	box5=new Box(530,360,30,40)
	box6=new Box(560,360,30,40)
	box7=new Box(590,360,30,40)
	box8=new Box(500,320,30,40)
	box9=new Box(470,320,30,40)
	box10=new Box(440,320,30,40)
	box11=new Box(560,320,30,40)
	box12=new Box(530,320,30,40)
	box13=new Box(530,280,30,40)
	box14=new Box(470,280,30,40)
	box15=new Box(500,280,30,40)
	box16=new Box(500,240,30,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
 laser1.display();
  cannon1.display();
}

function mouseDragged() {

	Matter.Body.setPosition(polygon1.body, { x: mouseX, y: mouseY });
	
	}
	
	function mouseReleased() {
	
	slingshot1.fly();
	
	}

	function keyPressed(){

		if(keyCode === 32){
	
			slingshot1.attach(polygon1.body);
		}
	
	
	}