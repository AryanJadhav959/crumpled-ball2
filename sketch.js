
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	var engine , world;
	

function preload()
 {
	img = loadImage('dustbingreen.png');
	
 }

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
    world = engine.world;

	paper = new Paper(100,640,this.radius);   

	bin = createSprite(1000,500,300,300);
	
	bin.addImage(img)
		
	side1 = new Side(875,500,20,300);
	side2 = new Side(1125,500,20,300);
	
	
	ground=createSprite(width/2, height-35, width,30);
	ground.shapeColor=color(128,128,128)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
	
 }


function draw() {
	
	rectMode(CENTER);
	ellipseMode(RADIUS)
  background(255);
  paper.display(); 
  bin.display();
  side1.display();
  side2.display();

  drawSprites();
 
 }

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:700, y:-700});
	}
 } 