function scene12(){
  // The twelfth scene of the storyline.
  //Mars skyline
  setGradient(0, 0, windowWidth, windowHeight, color(159,34,36), color(42,70,78));
  noStroke();

  //Sun
  fill(240,220,140)
  ellipse(width-200,height/3,30,30);

  //Ground
  fill(182,45,39);
  bezier(-100, height-100, width/4, height/2-200, width/3, height, width+100, height-100);
  fill(159,34,36);
  bezier(-100, height-100, width-width/3, height,width- width/3, height/2-200, width+100, height-100);
  fill(65,9,20)

  //CRATER//
  triangle(0,height-100, width/3, height-150, width/3, height-100)
  triangle(width-width/3,height-150, width-width/3, height-100, width, height-100)

  image(rockD,width/2-50,height/2+150,150,150) //refer sketch.js for rock image

  rect(0,height-100,width,200);
  triangle(width/3,height-100, width/3, height-150, width/2, height-100)
  triangle(width/2,height-100, width-width/3, height-150, width-width/3, height-100)
  fill(0,255,0);
  text('Please click on the meteorite'.substring(0, frameCount/2), width/2, 100); //reference
  fill(50,50,50,128)

  //Giant rock trigger
  if (trig8) {

    rect(width/2-200,height/2-100,400,250)
    triangle(width/2+10,height-120,width/2-100,height-300,width/2+100,height-300)

    fill(0,255,0);
    noStroke();
    textAlign(CENTER);
    textSize(25);
    text('RHODIUM: 0%',width/2,height/2-80)
    text('PLATINUM: 80% ',width/2,height/2-50)
    text('GOLD: 19.999%',width/2,height/2-20)
    text('RUTHENIUM: 0.00006% ',width/2,height/2+10)
    text('IRIDIUM: 0%',width/2,height/2+40)
    text('OSMIUM: 0% ',width/2,height/2+70)
    text('PALLADIUM: 0%',width/2,height/2+100)
    text('RHENIUM: 0% ',width/2,height/2+130)
    text('PRESS (SPACE) TO CONTINUE',width/2,150)

  }
}
