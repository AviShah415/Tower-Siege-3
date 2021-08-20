const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var stand1,stand2;
var polygon;
var polygonIMG;
var slingShot;
var score = 0;


function preload(){

    polygonIMG = loadImage("polygon.png");

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);
  block17 = new Block(640,175,30,40);
  block18 = new Block(670,175,30,40);
  block19 = new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21 = new Block(760,175,30,40);
  block22 = new Block(670,135,30,40);
  block23 = new Block(700,135,30,40);
  block24 = new Block(730,135,30,40);
  block25 = new Block(700,95,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  slingShot = new Slingshot(polygon,{x:100,y:200});

}


function draw() {
  background("gray"); 
  Engine.update(engine);
  strokeWeight(2);
  stroke("white");
  textSize(13);
  fill("white");
  text("SCORE : "+ score, width-300,50);

  ground.display()
  stand1.display()
  stand2.display()

  strokeWeight(2);
  stroke(15);

  fill("skyblue");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  fill("pink");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  fill("turquoise");
  block13.display();
  block13.score();
  block14.display()
  block14.score();
  block15.display();
  block15.score();
  fill("grey");
  block16.display();
  block16.score();
  fill("skyblue");
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  fill("turquoise");
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  fill("pink")
  block25.display();
  block25.score();
  fill("gold");
  imageMode(CENTER)
  image(polygonIMG, polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  }

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
  }
  
  
function mouseReleased(){
    slingShot.fly();
  }

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}