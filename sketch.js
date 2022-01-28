const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    createCanvas(3000,800);
    engine=Engine.create();
    world=engine.world;
 ground=new Ground(600,600,1200,20);
 box0=new Box(900,100,70,70);
 box1=new Box(800,100,70,70);
 box2=new Box(700,100,70,70);
 box3=new Box8(600,100,70,70);
 box4=new Box(500,100,70,70);
 ball=new Ball(200,200,80,80);
 rope=new Rope(ball.body,{x:500,y:500});
}

function draw(){
background("#70a45d");
Engine.update(engine);
ground.display();
box0.display();
box1.display();
box2.display();
box3.display();
box4.display();
ball.display();
rope.display();
}
