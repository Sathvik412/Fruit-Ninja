//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife;
var knifeImage ;


function preload(){
  
  knifeImage = loadImage("knife.png");
  fruit1 = loadImage("fruit1.png")
  fruit2 = loadImage("fruit2.png")
  fruit3 = loadImage("fruit3.png")
  fruit4 = loadImage("fruit4.png")
  gameover = loadImage("gameover.png")
  alienImage = loadImage("alien1.png")
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);
  fruitGroup=new Group()
  enemyGroup= new Group()
  score=0;
  //create fruit and monster Group variable here
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if knife touching fruit
   
    // Go to end state if knife touching enemy
      
  }
  if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
    score=score+5
  }
  
  if(enemyGroup.isTouching(knife)){
    enemyGroup.destroyEach();
    fruitGroup.destroyEach();
  }
  
  drawSprites();
  fruits();
  enemy();
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}
function fruits(){
if(World.frameCount%80===0){
 fruit=createSprite(400,200,20,20);
  fruit.scale=0.2
  r=Math.round(random(1,4));
  if(r===1){
    fruit.addImage(fruit1);
  }else if(r===2){
    fruit.addImage(fruit2);
  }else if(r===3){
    fruit.addImage(fruit3);
  } else{
    fruit.addImage(fruit4);
  }
    
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7
    fruit.setlifetime=100;
    
    fruitGroup.add(fruit);
  
  } 
} 

function enemy(){
 if(World.frameCount%80===0){
 alien=createSprite(400,200,20,20); 
alien.addImage(alienImage)
alien.velocityX=-9
alien.setlifetime=100;
  alien.y=random(0,600)
  enemyGroup.add(alien)
   
 }
}