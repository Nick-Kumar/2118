function scene10(){
  //Acts as transition between scene3 and scene5
  background(25);

  fill(0,255,0);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  textFont();
  text('USERNAME: LUTHOR, ANNUAL INCOME: $2,778,103,108'.substring(0, frameCount/2),width/2,50)
  text('LOCATION: PRIVATE ESTATE ON MARS, YEAR: 2118'.substring(0, frameCount-125/2),width/2,100)
  text('OBJECTIVE COMPLETE '.substring(0, frameCount-275/2),width/2,150)
  text('LOADING NEW OBJECTIVE '.substring(0, frameCount-325/2),width/2,200)


  ///////////////////BENHAM/////////////////////////
      // The following function rotates the BENHAM disk, as the same rate as the framerate
    push();
    translate(width/2,height/2);
    rotate(frameCount);
    Benham(0,0,250);
    pop();

////////////////////////////////////////////////////

  text('NEW OBJECTIVE: SALVAGE WHAT YOU CAN '.substring(0, frameCount-200/2),width/2,height-200)
  text('PRESS (SPACE) TO START '.substring(0, frameCount-350/2),width/2,height-150)

}
