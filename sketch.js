const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  

  //createSprite(400, 200, 50, 50);

  stand= new Ground(400,300,400,5,{isStatic:true});



  b1= new Box(330,235,30,40);
  b2= new Box(360,235,30,40);
  b3= new Box(390,235,30,40);
  b4= new Box(420,235,30,40);
  b5= new Box(450,235,30,40);
  b6= new Box(360,195,30,40);
  b7= new Box(390,195,30,40);
  b8= new Box(420,195,30,40);
  b9= new Box(390,155,30,40);
  

  //polygon = Bodies.circle(50,200,20);
  //World.add(world,polygon);




  shooter = new Shooter(50,200,20,20)
  //ss = new Launcher(this.shooter, {x:100,y:200})
  ss = new Launcher(this.shooter,{x:100,y:200});

  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("#AFEEEE");

  drawSprites();

  stand.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  ss.display();
  shooter.display();
  //this.image = loadImage("penthouse.png");

  
  //rect(polygon.position.x,polygon.position.y,40,40);
  keyPressed();
}

function mouseDragged(){
  Matter.Body.setPosition(shooter, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  ss.fly();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(shooter,shooter.body.position,{x:1,y:-1});
	}
}

function keyPressed() {
	if (keyCode === 32) {
	   ss.attach(shooter);
	}
}

