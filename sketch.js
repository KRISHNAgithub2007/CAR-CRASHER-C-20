var car1,weight1,speed1,damage1;
var car2,weight2,speed2,damage2;
var car3,weight3,speed3,damage3;
var wall1,wall2,wall3;

function setup() {
  createCanvas(1000,600);

  car1=createSprite(10, 60, 50, 30);
  car1.shapeColor="white";

  car2=createSprite(10, 300, 50, 30);
  car2.shapeColor="white";

  car3=createSprite(10, 540, 50, 30);
  car3.shapeColor="white";

  wall1=createSprite(990,60,50,50);
  wall1.shapeColor="purple";

  wall2=createSprite(990,300,50,50);
  wall2.shapeColor="purple";

  wall3=createSprite(990,540,50,50);
  wall3.shapeColor="purple";

  weight1=random(400,1500);
  weight2=random(400,1500);
  weight3=random(400,1500);

  speed1=random(50,90);
  speed2=random(50,90);
  speed3=random(50,90);

  damage1=0.5*weight1*speed1*speed1/22500
  damage2=0.5*weight2*speed2*speed2/22500
  damage3=0.5*weight3*speed3*speed3/22500

}

function draw() {
  background("black");  

    car1fun();

    car2fun();

    car3fun();
 
 if(keyDown("space") )
 {
   car1.velocityX=speed1/4;
   car2.velocityX=speed2/4;
   car3.velocityX=speed3/4;
 }

  drawSprites();
}

function car1fun()
{

  if(car1.isTouching(wall1))
  {
   car1.velocityX=0;
 
   if(damage1>180)
   {
     car1.shapeColor="red";
   }
 
   if(damage1>100 && damage1<180)
   {
     car1.shapeColor="yellow";
   }
 
   if(damage1<100)
   {
     car1.shapeColor="green";
   }
 
  }

}

function car2fun()
{

  if(car2.isTouching(wall2))
  {
   car2.velocityX=0;
 
   if(damage2>180)
   {
     car2.shapeColor="red";
   }
 
   if(damage2>100 && damage2<180)
   {
     car2.shapeColor="yellow";
   }
 
   if(damage2<100)
   {
     car2.shapeColor="green";
   }
   
  }

}

function car3fun()
{

  if(car3.isTouching(wall3))
 {

    car3.velocityX=0;

  if(damage3>180)
  {
    car3.shapeColor="red";
  }

  if(damage3>100 && damage3<180)
  {
    car3.shapeColor="yellow";
  }

  if(damage3<100)
  {
    car3.shapeColor="green";
  }
  
 }

}