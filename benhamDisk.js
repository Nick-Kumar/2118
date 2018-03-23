function Benham(x,y,z){// inspired by benham disk
  // This function takes in three inputs, namely x and y input for the coordinates of the disk on the screen.
  // The z value determines the size of the disk.
  // The following shapes and colours together constitute the structure of a benham disk
  fill(255);
  ellipse(x,y,z,z);
  noFill();
  stroke(0);
  strokeWeight(5);

  //Following contain inner arcs
  arc(x,y,z-20,z-20,PI,PI+QUARTER_PI);
  arc(x,y,z-40,z-40,PI,PI+QUARTER_PI);
  arc(x,y,z-60,z-60,PI,PI+QUARTER_PI);

  arc(x,y,z-80,z-80,PI+QUARTER_PI,PI+HALF_PI);
  arc(x,y,z-100,z-100,PI+QUARTER_PI,PI+HALF_PI);
  arc(x,y,z-120,z-120,PI+QUARTER_PI,PI+HALF_PI);

  arc(x,y,z-140,z-140,PI+HALF_PI,TWO_PI-QUARTER_PI);
  arc(x,y,z-160,z-160,PI+HALF_PI,TWO_PI-QUARTER_PI);
  arc(x,y,z-180,z-180,PI+HALF_PI,TWO_PI-QUARTER_PI);

  arc(x,y,z-200,z-200,TWO_PI-QUARTER_PI,TWO_PI);
  arc(x,y,z-220,z-220,TWO_PI-QUARTER_PI,TWO_PI);
  arc(x,y,z-240,z-240,TWO_PI-QUARTER_PI,TWO_PI);

  //exterior of the disk
  ellipse(x,y,z,z);
  fill(0)
  arc(x,y,z,z,0,PI);
}
