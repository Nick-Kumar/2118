//This file is named transition, because it is meant to transition the user from the artwork back to reality.
//It provides a final food for thought.
function scene14(){

  background(25);

  fill(0,255,0);
  noStroke();
  textAlign(CENTER);
  textSize(20);

  text('YOU HAVE JOURNEYED NOT ONLY ACROSS TIME'.substring(0, frameCount/2),width/2,100)
  text('BUT ACROSS DIFFERENT PLANETS, AND DIFFERENT LIVES AS WELL'.substring(0, frameCount-75/2),width/2,150)
  text('IS THE FUTURE MORE OF THE SAME AS NOW?'.substring(0, frameCount-75/2),width/2,200)
  text('OR IS IT COMPLETELY DIFFERENT?'.substring(0, frameCount-75/2),width/2,250)


  ///////////////////BENHAM/////////////////////////

    push();
    translate(width/2,height-100);
    rotate(frameCount);
    Benham(0,0,250);
    pop();

////////////////////////////////////////////////////

}
