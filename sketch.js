const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    bgImg = loadImage("castle.jpg")
}

function setup(){
    canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    base1 = new Ground(850,600,300,10);
    base2 = new Ground(980,250,200,10);

    box1 = new Box(800,570,40,40,"red");
    box2 = new Box(830,570,40,40,"violet");
    box3 = new Box(860,570,40,40,"blue");
    box4 = new Box(870,570,40,40,"green");

    box5 = new Box(815.5,550,35,35,"yellow");
    box6 = new Box(840.5,550,35,35,"darkviolet");
    box7 = new Box(865.5,550,35,35,"lightblue");

    box8 = new Box(830.5,530,30,30,"cyan");
    box9 = new Box(850,530,30,30,"green");

    box10 = new Box(840.5,510,30,30,"red");


    
    box11 = new Box(960,240,40,40,"red");
    box12 = new Box(1010,240,40,40,"violet");
    box13 = new Box(980,240,40,40,"blue");

    box14 = new Box(970.5,220,35,35,"yellow");
    box15 = new Box(990.5,220,35,35,"darkviolet");

    box16 = new Box(980.5,200,30,30,"cyan");


    bird = new Bird(200,650);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:700});
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    strokeWeight(4);

    slingshot.display();   
    
    strokeWeight(0);
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

    ground.display();
    base1.display();
    base2.display();
    
    bird.display();
    //log6.display();
     
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}