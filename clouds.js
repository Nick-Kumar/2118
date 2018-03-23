function cloud(y){
  //reference(-Assignment 3 by NIKHIL ANMOL KUMAR)
  //This function contains three functions within, namely show, move and over.
  //The details of those sub functions are mentioned below.
  //This function also pertains to the top layer of the clouds.
  //This function takes in only one input. This input determines the y position of the cloud in respect to the entire canvas.
  this.x =  random() * windowWidth;
  this.y = y;
  this.speed = 6;
  this.isItDeactive = false;


  this.show = function(){
    //This function when called displays the clouds.
    //The function contains the cloud shape and colours
    inter = lerpColor(c1,white,0.33);
    fill(inter);
    arc(this.x, this.y+30, 85, 85, PI, TWO_PI);
    arc(this.x+50, this.y, 85, 85, PI-QUARTER_PI, TWO_PI+QUARTER_PI, OPEN);
    arc(this.x+100, this.y+30, 85, 85, PI, TWO_PI);
  }

  this.move = function() {
    //This function moves the cloud in the x axis with a speed of 6 units
    this.x -= this.speed;
  }

  this.over = function() {
    //When this function is called it deactivates the cloud.
    this.isItDeactive = true;
  }

}
