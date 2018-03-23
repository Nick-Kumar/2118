
function Rocket(x,y){
  //This function is similar to the meteor (see meteor.js file) function. With the exception of shape.
  this.x = x;
  this.y = y;



  this.update = function(){
    //Unlike the meteor function, this function relies on the binoculars to be set to true.
    if (binoculars) {
      var d = dist(mouseX,mouseY,this.x,this.y)


      if (d<500) {
        this.y -= 35;
      }
      if (this.y<-75) {
        sceneNumber = 6;
      }
    }


  }

  this.show = function(){
    fill(70)
    rect(this.x,this.y,15,35,100,100,0,0);
    fill(255,0,0,200)
    triangle(this.x,this.y+35,this.x+15,this.y+35,this.x+7.5,this.y+75)

  }
}
