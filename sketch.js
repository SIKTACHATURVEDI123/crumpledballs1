
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper1 , Ground1 , dustbin1 , dustbin2 , dustbin3 ;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 Paper1= new Paper(200 , 640 ,50 );
 Ground1 =new Ground(400 ,650 , 1600, 15);
 dustbin1= new Dustbin(900 , 625,200,20)

 dustbin2= new Dustbin(800 , 550,20,150)
 dustbin3= new Dustbin(1000 , 550,20,150)

 //dustbinwall2 = Bodies.rectangle(800 , 600, 20 ,100 , {isStatic:true}) ;
 //World.add(world , dustbinwall2);

 //dustbinwall3 = Bodies.rectangle(950, 600, 20 , 100, {isStatic:true}) ;
 //World.add(world , dustbinwall3);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Paper1.display();
Ground1.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
}



function keyPressed()   //predefined function 
{
	  if (keyCode === UP_ARROW) 
	  {

    	Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:350,y:-550});
		Matter.Body.setStatic(Paper1.body, false)
		
	  }
	  
	  if(keyCode === 32)
	  {

		Matter.Body.setPosition(Paper1.body,{x:50,y:450})
		Matter.Body.setStatic(Paper1.body, true)
	  }
}