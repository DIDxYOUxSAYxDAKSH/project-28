
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 db	= loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new PAPER(150,300,20);
	
	db1 = new DUSTBIN (600,500,10,80);
	db2 = new DUSTBIN (680,500,10,80);
	db3 = new DUSTBIN (640,540,80,10);
	
	tableTop = new TABLE(400,550,750,10);
	tbl1= new TABLE(100,625,10,150);
	tbl2= new TABLE(150,600,10,100);
	tbl3= new TABLE(650,625,10,150);
	tbl4= new TABLE(600,600,10,100);

	l1 = new LAUNCHER(paper.body,{x:150,y:280})
}


function draw() {
  rectMode(CENTER);
  background(183,180,181);
  
  tableTop.display();
  tbl1.display();
  tbl2.display();
  tbl3.display();
  tbl4.display();

	paper.display();

	db1.display();
	db2.display();
	db3.display();

	l1.display();

	imageMode(CENTER);
	image(db,640,500,100,100);

	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:65,y:-65})
	}
}

function mouseDragged(){
Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 l1.fly();	
}
