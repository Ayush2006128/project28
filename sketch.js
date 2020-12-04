
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5;
var stone1;
var gr;
var boy,bm;
var tree,trimg;
var sling1;
function preload()
{
trimg=loadImage("Plucking mangoes/tree.png");
bm=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 700);
boy=createSprite(50,455,50,50);
boy.addImage(bm);
boy.scale=0.05;
tree=createSprite(790,200,50,50);
tree.addImage(trimg);
tree.scale=0.5;



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1=new mango(750,200,20)
mango2=new mango(700,200,20)
mango3=new mango(650,200,20)
mango4=new mango(600,210,20)
mango5=new mango(560,200,20)
stone1=new stone(235,420,20)

gr=new Ground(200,500,1500,20)
sling1=new slingshot(stone1.body,{x:45,y:425});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
gr.display();
sling1.display()
//stone1.y=mouseY;
//stone1.x=mouseX;
detectollision(stone1,mango1);
detectollision(stone1,mango2);
detectollision(stone1,mango3);
detectollision(stone1,mango4);
detectollision(stone1,mango5);


  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseRelesed(){
  sling1.fly()
}
function detectollision(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position
  stoneBodyPosition=Lstone.body.position
  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=Lmango.r+Lstone.r){
    Matter.Body.setStatic(Lmango.body,false);
  }

}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone1.body,{x:235,y:420})
    boy.attach(stone1.body);
  }
}
