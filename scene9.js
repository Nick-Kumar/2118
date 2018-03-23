function scene9(){
  // The ninth scene of the storyline.
  // Mars Skyline...Note colours are meant to represent Mars' skyline
  setGradient(0, 0, windowWidth, windowHeight, color(159,34,36), color(42,70,78));
  noStroke();


  //Meteor shower
  meteor.update();
  meteor.show();
  meteorB.update();
  meteorB.show();
  meteorC.update();
  meteorC.show();
  meteorD.update();
  meteorD.show();
  meteorE.update();
  meteorE.show();

  //The following shapes are for the ground.
  fill(240,220,140)
  ellipse(width-200,height/3,30,30);
  fill(182,45,39);
  bezier(0, height-100, width/3, height-300, width/3, height, width, height-100);
  fill(159,34,36);
  bezier(0, height-100, width/2, height, width/2, height-300, width, height-100);
  fill(65,9,20)
  rect(0,height-100,width,100);
  bezier(0, height-100, width/2, height, width/2, height-200, width, height-100);
  bezier(0, height-100, width/2, height-200, width/2, height, width, height-100);

  ///////////////////////BINOCULARS/////////////////////////////
    binocular();

  ////////////////////OBJECTIVE/////////////////////////////////
    fill(0,255,0);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    textFont(lcdFont);
    text('OBJECTIVE: FIND THE METEORITE '.substring(0, frameCount*3), width/2, 100);
    text('(Hint: Check upper left corner) '.substring(0,frameCount*3), width/2, 200); //reference
    text('<BINOCULAR Mode>', 100, 50)


}
