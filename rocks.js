function rock(){
  //This function randomly generates rocks.
  //The core functionality of this function is similar to the clouds.js file.
  //With the only exception of not taking an input.
  this.x = windowWidth;
  this.y = random(height-90,height)
  this.speed = 50;
  this.size = random(20,50)
  this.isItDeactive = false;

  this.show = function(){

    for (var i = 0; i < allRocks.length; i++) {
      image(allRocks[i],this.x,this.y,this.size,this.size)
    }

  }

  this.move = function(){
    this.x -= this.speed;
  }

  this.over = function(){
    this.isItDeactive = true;
  }
}
