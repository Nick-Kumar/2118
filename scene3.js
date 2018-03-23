function scene3(){
  // The third scene of the storyline.
  setGradient(0, 0, windowWidth, windowHeight, c1, c2);
  noStroke();

  var sandDunes = random(-5,5) //This is done to change the height of the sand under the landspeeder

  fill(240,220,140)
  ellipse(width-200,height/3,150,150);

  fill(65,9,20)
  rect(0,height-100 +sandDunes,width,200);


/////////////////CLOUDS/////////////////////////////
  // Same as scene1
    if(Math.random()<0.04){
          cloudA.push(new cloud(50));
    }

    for (var i = 0; i < cloudA.length; i++) {
        cloudA[i].show();
        cloudA[i].move();
        if (cloudA[i].x<0) {
          cloudA[i].over();
        }
    }

    for(var i = 0; i<cloudA.length; i++){
      if (cloudA[i].isItDeactive) {
        cloudA.splice(i,1);
      }
    }




//////////////landspeeder////////////////////

    landspeeder(); //see landspeeder.js

/////////////rocks////////////////////////////
  //The following code works on the same principle as the cloud code above.
  //For further explanation please refer scene1
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

  earthDialogue(); //earth dialogue begins, refer earthDialogue.js

}
