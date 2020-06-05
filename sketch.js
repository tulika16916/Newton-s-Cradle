var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,b1,r,b2,c1,c2,b3,b4,c3,c4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	b1= new Bob(300,300,30);
	b2=new Bob(250,250,30);
	b3=new Bob(200,200,30);
	b4=new Bob(150,150,30);
	r= new Roof(250,200,200,30)
	c1=new Chain(b1.body,r.body,0*60,0)
	c2=new Chain(b2.body,r.body,-1*60,0)
	c3=new Chain(b3.body,r.body,-1*60,0)
	c4=new Chain(b4.body,r.body,-1*60,0)

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Pink");
 
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 r.display();
 c1.display();
 c2.display()
 c3.display()
 c4.display()
 

}

function mouseDragged(){
	Matter.Body.setPosition(b4.body,{x:mouseX,y:mouseY})
 }
 
 
 