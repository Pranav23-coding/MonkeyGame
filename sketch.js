var survivalTime = 0
var PLAY = 1;
var END = 0;
var gameState = 1
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var obstacle

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,400);
  //creating monkeys
  monkey = createSprite(40,315);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,1200,10);
  ground.velocityX = -4
  ground.x = ground.width /2;
  console.log(ground.x)
  survivalTime = 0

  obstaclesGroup = new Group();
  FoodGroup = new Group();
}


function draw() {
  background("white");
if (gameState === PLAY){
   survivalTime = Math.ceil(frameCount/frameRate())
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  
   if(keyDown("space")&&monkey.y >= 200) { 
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8
  
    monkey.collide(ground);
    

    
    
   bananas();
    Obstacles(); 
    
   
}
  
  
  
  
  
  monkey.collide(ground);
 
  textSize(20);
  fill("black");
  
  text("Survival Time : " + survivalTime,100,50)

  
 drawSprites() 
}
function bananas() {
  
  if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(200, 50));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    
    
    FoodGroup.add(banana);
  }
}
function Obstacles(){
 if (frameCount % 300 === 0){
   obstacle = createSprite(600,315,40,40);
   obstacle.velocityX = -4
    
   obstacle.addImage(obstacleImage)
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  
 }
}






