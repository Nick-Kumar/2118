function scene11(){
  // The eleventh scene of the storyline.
  // Mars skyline
  setGradient(0, 0, windowWidth, windowHeight, color(159,34,36), color(42,70,78));
  noStroke();

  var sandDunes = random(-5,5) //sandDunes to show that the landspeeder is flying

  //sun
  fill(240,220,140)
  ellipse(width-200,height/3,30,30);

  //ground
  fill(65,9,20)
  rect(0,height-100 +sandDunes,width,200);


//////////////landspeeder////////////////////

    landspeeder_RICH(); //refer landspeeder.js

/////////////rocks////////////////////////////
// refer scene3.js as to how the code runs
if (Math.random()<0.08) {
    showRocks.push(new rock());
}

for (var i = 0; i < showRocks.length; i++) {
    showRocks[i].show();
    showRocks[i].move();
    if (showRocks[i].x<0) {
      showRocks[i].over();
    }
}

for(var i = 0; i<showRocks.length; i++){
  if (showRocks[i].isItDeactive) {
    showRocks.splice(i,1);
  }
}

  marsDialogue(); //Refer marsDialogue.js

}
