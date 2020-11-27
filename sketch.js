//Create variables here
var dog, happyDog, database, foodS, foodStock, foodObj, feedPet, addFood;
var dogImage, happyDogImg;
var fedTime, lastFed, hour;
var changingGameState, readingGameState, gameState;
var bedroomImg, gardenImg, washroomImg;


function preload(){
  //load images here
  dogImage = loadImage("./images/dogImg.png");
  happyDogImg = loadImage("./images/dogImg1.png")
  sadDogImg = loadImage("./images/Lazy.png")
  bedroomImg = loadImage("./images/Bed Room.png")
  gardenImg = loadImage("./images/Garden.png")
  washroomImg = loadImage("./images/Wash Room.png")
}

function setup() {
  createCanvas(1000, 500);
  database = firebase.database();
  

  foodStock = database.ref("food");
  foodStock.on("value", readStock);
  
  dog = createSprite(700, 300);
  dog.addImage(dogImage);
  dog.scale = 0.5;
  
  foodObj = new Food();
  
  currentTime = hour();

  readState = database.ref("gameState");
  readState.on("value", function(data){
    gameState = data.val();
  });
}
 

function draw() {  
  background(46, 139, 87)
    
  

  fedTime = database.ref("FeedTime");
  fedTime.on("value", function(data){
    lastFed = data.val()
  })
 

  feedPet = createButton("feed the dog");
  feedPet.position(700, 95);
  feedPet.mousePressed(feedDog);

  addFood = createButton("add food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods)

  foodObj.display();
  drawSprites();

  fill(255);
  stroke(255);
  textSize(20);
  
  if (lastFed > 12){
    text("Last Fed: " + lastFed % 12 + " pm", 350, 30);
  } else if (lastFed === 0){
    text("Last Fed: 12 am", 350, 30);
  } else if (lastFed === 12){
      text("Last Fed: 12 pm", 350, 30);
  } else {
    text("Last Fed: " + lastFed + " am", 350, 30);
  }

  if (gameState != "Hungry") {
    feedPet.hide();
    addFood.hide();
    dog.remove();
  } else {
    feedPet.show();
    addFood.show();
    dog.addImage(sadDogImg); 
  }
  
  if (currentTime === (lastFed + 1)){
    update("Playing");
    foodObj.garden();
  } else if (currentTime === (lastFed + 2)){
    update("Sleeping")
    foodObj.bedroom();
  } else if (currentTime > (lastFed + 2) && currentTime <= (lastFed + 4)){
    update("Bathing");
    foodObj.washroom();
  } else {
    update("Hungry");
    foodObj.display();
  }

  foodObj.getFoodStock();


}