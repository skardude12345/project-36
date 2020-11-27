  function readStock(data){
    foodS = data.val();
  }
  

  function feedDog(){
    dog.addImage(happyDogImg);
    writeStock(foodS);
    
      database.ref("/").update({
      //food: writeStock(foodS),
      FeedTime: hour()
    })
  }
  

  function writeStock(x){
    if (x <= 0){
      x = 0;
    } else {
      x-- 
    }
  

    database.ref("/").update({
      food: x
    })
  }
  

  function addFoods(){
    foodS++;
    database.ref("/").update({
      food: foodS
    })
  }

  
  function update(state){
      database.ref("/").update({
          gameState: state
      });
  }