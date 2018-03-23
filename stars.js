function stars (){
  //Function creates stars Randomly.
  //It contains the show function
  this.x =  random() * windowWidth; // x position
  this.y = random() * windowHeight; // y position
  this.size = random(2,8) // random size


  this.show = function(){
    //This function randomly sets the size and colour (Greyscale) of the star.  
    fill(random(0,255))
    ellipse(this.x,this.y,this.size,this.size)
  }

}
