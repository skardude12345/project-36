/*class Food{

    constructor(){
        this.image = loadImage("Milk.png");
        this.foodStock = 0;
        this.lastFed;

    }


    getFoodStock(){
        database.ref("food").on("value", function(data){
            this.foodStock = data.val();
        })
    }



    updateFoodStock(s){
        database.ref("/").update({
            food: s
        })
    }


    deductFoodStock(){
        getFoodStock()-1
    }

    display(){
      

       var x=70,y=100; 
       imageMode(CENTER);
       if(this.foodStock!=0){
        image(this.image, 720, 220, 70, 70);
        
       for(var i=0;i<this.foodStock;i++){
         if(i%10==0){
           x=70;
           y=y+50;
         }
         image(this.image,x,y,50,50);
         x=x+30;
       }
     }
   }
}  */

class Food {
    constructor(){
    this.foodStock= 0;
    this.lastFed;
    this.image=loadImage("images/milk.png");
    }
  
    updateFoodStock(s){
        database.ref("/").update({
            food: s
        })
    }
  
   getFedTime(lastFed){
     this.lastFed=lastFed;
   }
  
   deductFoodStock(){
    
   }
  
   getFoodStock(){
        database.ref("food").on("value", (data)=>{
            this.foodStock = data.val();
        })
   }
  
   bedroom(){
    imageMode(CENTER);
    image(bedroomImg, width/2,height/2,width,height);  
   }
  
   garden(){
    imageMode(CENTER);
    image(gardenImg,width/2,height/2,width,height);  
   } 

   washroom(){
    imageMode(CENTER);
    image(washroomImg, width/2,height/2,width,height); 
   }

    display(){
        
        var x=70,y=100; 
        imageMode(CENTER);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                x=70;
                y=y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
      }
    }
  }


  
    

    
    



     