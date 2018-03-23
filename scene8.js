function scene8(){
  //Acts as transition between scene7 and scene9
  background(25);

  fill(0,255,0);
  noStroke();
  textAlign(CENTER);
  textSize(20);
  text('LOCATION: MARS, YEAR: 2118 '.substring(0, frameCount/2),width/2,50)
  text('OBJECTIVES COMPLETE '.substring(0, frameCount/2),width/2,100)
  text('LOADING NEW USER: LUTHOR, Current LOCATION: SOMEWHERE ON MARS'.substring(0, frameCount-75/2),width/2,150)
  text('VEHICLE: N/A, ANNUAL INCOME: $2,778,103,108 '.substring(0, frameCount-125/2),width/2,200)


  ///////////////////BENHAM/////////////////////////

    push();
    translate(width/2,height/2);
    rotate(frameCount);
    Benham(0,0,250);
    pop();

////////////////////////////////////////////////////

  text('NEW OBJECTIVE: FIND THE ASTEROID YOU REQUESTED FOR'.substring(0, frameCount-200/2),width/2,height-200)
  text('PRESS (SPACE) TO START '.substring(0, frameCount-350/2),width/2,height-150)

}
