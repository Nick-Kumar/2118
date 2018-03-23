function binocular(){
  ///////////////////////////BLACK OVERLAY BEHIND THE BINOCULARS//////////////////////

    //The following code parts the array to reveal the binoculars viewfinder.

  for (var i = 0; i < width; i++) {
    if (i<mouseX-380 || i>mouseX+380) {
      stroke(25);
      line(i,0,i,height);
    }
  }
  for (var i = 0; i < height; i++) {
    if (i<mouseY-200 || i>mouseY+200) {
      stroke(25);
      line(0,i,width,i);
    }
  }
  //Simple binocular shape
  noFill();
  stroke(200,255,200);
  strokeWeight(7);
  rect(mouseX-380,mouseY-200,380,200);
  rect(mouseX-380,mouseY,380,200);
  rect(mouseX,mouseY-200,380,200)
  rect(mouseX,mouseY,380,200)
}
