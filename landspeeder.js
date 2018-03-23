// Attempted to minimize code repetition, since there is a difference in colour regarding some shapes, I have managed to keep those shapes intact.


function landspeeder(){
  //inspired by star wars
  noStroke();
  strokeWeight(1)

  //The following code contains the base of the landspeeder, including colours and the basic rectangular shape, with rounded edges.
  fill(162,62,60)
  rect(width/2-175,height/2+upsAndDowns,400,20,0,100,0,0)
  fill(131,38,30)
  rect(width/2-175,height/2+20+upsAndDowns,400,20,0,0,100,0)
  fill(110,117,125)
  rect(width/2-70,(height/2)+10+upsAndDowns,280,20,100,100,100,100)

  stripesWindshield();

  //Thrusters
  fill(217,133,88)
  rect(width/2-200,(height/2)-10+upsAndDowns,100,30,0,100,100,0)
  fill(0,0,0)
  rect(width/2-150,(height/2)-10+upsAndDowns,10,30)
  fill(217,133,88)
  rect(width/2-250,(height/2)-80+upsAndDowns,100,30,0,100,100,0)
  fill(0,0,0)
  rect(width/2-200,(height/2)-80+upsAndDowns,10,30)

  windFlames();
}

function landspeeder_RICH(){
  //inspired by star wars
  // The difference between this landspeeder and the previous one is colour.
  // This landspeeder has a golden hue to highlight that this landspeeder is new and is meant for the affluent.

  noStroke();
  strokeWeight(1)
  //Base
  fill(212,175,55)
  rect(width/2-175,height/2+upsAndDowns,400,20,0,100,0,0)
  fill(212,175,55)
  rect(width/2-175,height/2+20+upsAndDowns,400,20,0,0,100,0)
  fill(212,175,55)

  rect(width/2-70,(height/2)+10+upsAndDowns,280,20,100,100,100,100)

  //Stripes
  stripesWindshield();

  //Thrusters
  fill(212,175,55)
  rect(width/2-200,(height/2)-10+upsAndDowns,100,30,0,100,100,0)
  fill(0,0,0)
  rect(width/2-150,(height/2)-10+upsAndDowns,10,30)
  fill(212,175,55)
  rect(width/2-250,(height/2)-80+upsAndDowns,100,30,0,100,100,0)
  fill(0,0,0)
  rect(width/2-200,(height/2)-80+upsAndDowns,10,30)

  windFlames();
}

function stripesWindshield(){
  //The following shapes are stripes at the side of the landspeeder.
  stroke(0);
  line(width/2-20,(height/2)+12+upsAndDowns,width/2+206,height/2+12+upsAndDowns)
  line(width/2-20,(height/2)+16+upsAndDowns,width/2+209,height/2+16+upsAndDowns)
  line(width/2-20,(height/2)+20+upsAndDowns,width/2+209,height/2+20+upsAndDowns)
  line(width/2-20,(height/2)+24+upsAndDowns,width/2+209,height/2+24+upsAndDowns)
  line(width/2-20,(height/2)+28+upsAndDowns,width/2+206,height/2+28+upsAndDowns)
  noStroke();
  strokeWeight(5)
  stroke(187,116,74)
  fill(131,38,30)
  rect(width/2-70,(height/2)+10+upsAndDowns,70,20,100,100,100,100)
  noStroke();

  //The following shape is the Windshield of the landspeeder.
  fill(199,215,220)
  arc(width/2-70,(height/2)+upsAndDowns,200,100,PI,TWO_PI,CHORD)
}

function windFlames(){
  //The following shape is the wing of the landspeeder.
  fill(125,136,142)
  quad(width/2-220,(height/2)-50+upsAndDowns,width/2-170,(height/2)-50+upsAndDowns,width/2-120,(height/2)-10+upsAndDowns,width/2-170,(height/2)-10+upsAndDowns)

  //Added cool flames, because why not?//
  fill(255)
  triangle(width/2-300+random(-30,30),height/2-65+upsAndDowns,width/2-250,height/2-80+upsAndDowns,width/2-250,height/2-50+upsAndDowns)
  triangle(width/2-250+random(-30,30),height/2+5+upsAndDowns,width/2-200,height/2-10+upsAndDowns,width/2-200,height/2+20+upsAndDowns)
}
