function spaceship(){
  //The following shapes are the center console of the spaceship.
  fill(50)
  noStroke();
  triangle(0,height, width/3,height-200,width/3,height)
  setGradient(width/3,height-200, width/2,300, color(50), color(122))
  noStroke();
  triangle(width,height, width/2+(width/3),height-200,width/2+(width/3),height)
  fill(0)
  stroke(255)
  strokeWeight(3)
  rect(width/2, height-150,250,100,10,10,10,10)
  fill(0,255,0);
  noStroke();
  textSize(20);
  textAlign(CENTER);

  //Center screen of the spaceship
  text("Awaiting Command...",width/2+100, height-120)
  fill(90,19,30)
  stroke(0)
  ellipse(width/2+350,height-100,80,80)
  fill(255,255,255);

  //Button with a [X] symbol
  noStroke();
  textSize(60);
  textAlign(CENTER);
  text("[X]",width/2+350,height-80)

  //Colourful keypad on the left
  fill(random(0,255),random(0,255),random(0,255))
  rect(width/2-100,height-150,20,20)
  rect(width/2-80,height-150,20,20)
  rect(width/2-60,height-150,20,20)
  fill(random(0,255),random(0,255),random(0,255))
  rect(width/2-100,height-130,20,20)
  rect(width/2-80,height-130,20,20)
  rect(width/2-60,height-130,20,20)
  fill(random(0,255),random(0,255),random(0,255))
  rect(width/2-100,height-110,20,20)
  rect(width/2-80,height-110,20,20)
  rect(width/2-60,height-110,20,20)
  fill(random(0,255),random(0,255),random(0,255))
  rect(width/2-100,height-90,20,20)
  rect(width/2-80,height-90,20,20)
  rect(width/2-60,height-90,20,20)
  fill(random(0,255),random(0,255),random(0,255))
  rect(width/2-100,height-70,20,20)
  rect(width/2-80,height-70,20,20)
  rect(width/2-60,height-70,20,20)
  fill(random(0,255),random(0,255),random(0,255))
  rect(width/2-100,height-50,20,20)
  rect(width/2-80,height-50,20,20)
  rect(width/2-60,height-50,20,20)

  //Additional shapes.
  fill(255,0,0)
  rect(width/2-180,height-150,40,40)
  fill(0,255,0)
  rect(width/2-180,height-100,40,40)
  fill(0,0,255)
  rect(width/2-180,height-50,40,40)

}
