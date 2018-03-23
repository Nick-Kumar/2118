
function Meteor(x,y){
  //This function creates an individual meteor.
  //THis function has two more sub functions i.e. show and update.
  //The inputs this function takes is the coordinates for the meteor to be displayed.
  this.x = x;
  this.y = y;



  this.update = function(){
    // The update function updates the meteors position on the basis of the distance between the mouse pointer and the meteor.
    // The meteor is meant to travel in a diagonal direction towards the end of the screen.
    var d = dist(mouseX,mouseY,this.x,this.y)


    if (d<500) {
      this.x -= 30;
      this.y += 30;
    }

    if (this.y>height-100 && sceneNumber == 1) {
      sceneNumber = 2; //Changes screen number
    }
    else if (this.y>height-100 && sceneNumber == 9) {
      sceneNumber = 10; // Changes screen number
    }

  }

  this.show = function(){
    // When this function is called it displays the meteor.
    fill(255)
    ellipse(this.x,this.y,9,9);
    triangle(this.x-4,this.y,this.x+20,this.y-20,this.x+4,this.y)

  }
}
