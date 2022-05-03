const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground();
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,50,70,100);
}

function draw(){
    background(202,0,0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
   
}