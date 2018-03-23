function scene5(){
    // The fifth scene of the storyline.

    // sky colour
    setGradient(0, 0, windowWidth, windowHeight/2, c1, c2);
    setGradient(0, windowHeight/2, windowWidth, windowHeight, c2, color(201,97,53));
    noStroke();

    //sun
    fill(240,220,140)
    ellipse(width-200,height/3,150,150);

    //rockets
    rocket.update();
    rocket.show();

    //ground
    fill(182,45,39);
    bezier(-100, height-100, width/4, height/2-200, width/3, height, width+100, height-100);
    fill(159,34,36);
    bezier(-100, height-100, width-width/3, height,width- width/3, height/2-200, width+100, height-100);
    fill(65,9,20)

    //CRATER//
    triangle(0,height-100, width/3, height-150, width/3, height-100)
    triangle(width-width/3,height-150, width-width/3, height-100, width, height-100)

    image(rockA,width/2,height-120,50,50)  // images of rocks, refer sketch.js
    image(rockE,width/2+30,height-130,30,30)
    image(rockC,width/2-50,height-130,40,40)
    image(rockB,width/2-70,height-130,20,20)
    image(rockD,width/2-160,height-150,50,50)
    image(rockC,width/2+70,height-140,40,35)
    image(rockB,width/2+100,height-140,30,20)

    rect(0,height-100,width,200);
    triangle(width/3,height-100, width/3, height-150, width/2, height-100)
    triangle(width/2,height-100, width-width/3, height-150, width-width/3, height-100)
    fill(50,50,50,128)

    //trig-> trigger
    //If mouse clicks anyone of the rocks, the respective trigger turns true.
    //When all of the rocks are clicked, the scene triggers the rocket to start moving.
    if (trig1) {
      //Each trigger contains a dialog box which contains the details of the rocks in terms of the minerals they carry.
      //All values are static
      rect(width/2-200,height/2-100,400,250)
      triangle(width/2+10,height-120,width/2-100,height-300,width/2+100,height-300)

      fill(0,255,0);
      noStroke();
      textAlign(CENTER);
      textSize(25);
      text('RHODIUM: 0%',width/2,height/2-80)
      text('PLATINUM: 0% ',width/2,height/2-50)
      text('GOLD: 0.00000002252%',width/2,height/2-20)
      text('RUTHENIUM: 0.00006% ',width/2,height/2+10)
      text('IRIDIUM: 0%',width/2,height/2+40)
      text('OSMIUM: 0% ',width/2,height/2+70)
      text('PALLADIUM: 0%',width/2,height/2+100)
      text('RHENIUM: 0% ',width/2,height/2+130)
    }
    else if (trig2) {
      rect(width/2-200,height/2-100,400,250)
      triangle(width/2+40,height-130,width/2-100,height-300,width/2+100,height-300)

      fill(0,255,0);
      noStroke();
      textAlign(CENTER);
      textSize(25);
      text('RHODIUM: 0%',width/2,height/2-80)
      text('PLATINUM: 0% ',width/2,height/2-50)
      text('GOLD: 0.00001%',width/2,height/2-20)
      text('RUTHENIUM: 0% ',width/2,height/2+10)
      text('IRIDIUM: 0%',width/2,height/2+40)
      text('OSMIUM: 0% ',width/2,height/2+70)
      text('PALLADIUM: 0%',width/2,height/2+100)
      text('RHENIUM: 0.001% ',width/2,height/2+130)
    }
    else if (trig3) {
      rect(width/2-200,height/2-100,400,250)
      triangle(width/2-35,height-130,width/2-100,height-300,width/2+100,height-300)

      fill(0,255,0);
      noStroke();
      textAlign(CENTER);
      textSize(25);
      text('RHODIUM: 0%',width/2,height/2-80)
      text('PLATINUM: 0.0000001% ',width/2,height/2-50)
      text('GOLD: 0%',width/2,height/2-20)
      text('RUTHENIUM: 0% ',width/2,height/2+10)
      text('IRIDIUM: 0%',width/2,height/2+40)
      text('OSMIUM: 0% ',width/2,height/2+70)
      text('PALLADIUM: 0%',width/2,height/2+100)
      text('RHENIUM: 0% ',width/2,height/2+130)
    }
    else if (trig4) {
      rect(width/2-200,height/2-100,400,250)
      triangle(width/2-55,height-130,width/2-100,height-300,width/2+100,height-300)

      fill(0,255,0);
      noStroke();
      textAlign(CENTER);
      textSize(25);
      text('RHODIUM: 0%',width/2,height/2-80)
      text('PLATINUM: 0% ',width/2,height/2-50)
      text('GOLD: 0%',width/2,height/2-20)
      text('RUTHENIUM: 0% ',width/2,height/2+10)
      text('IRIDIUM: 0%',width/2,height/2+40)
      text('OSMIUM: 0% ',width/2,height/2+70)
      text('PALLADIUM: 0%',width/2,height/2+100)
      text('RHENIUM: 0.00007% ',width/2,height/2+130)
    }
    else if (trig5) {
      rect(width/2-200,height/2-100,400,250)
      triangle(width/2-130,height-145,width/2-100,height-300,width/2+100,height-300)

      fill(0,255,0);
      noStroke();
      textAlign(CENTER);
      textSize(25);
      text('RHODIUM: 0%',width/2,height/2-80)
      text('PLATINUM: 0% ',width/2,height/2-50)
      text('GOLD: 0%',width/2,height/2-20)
      text('RUTHENIUM: 0% ',width/2,height/2+10)
      text('IRIDIUM: 0%',width/2,height/2+40)
      text('OSMIUM: 0.000000005% ',width/2,height/2+70)
      text('PALLADIUM: 0.0001%',width/2,height/2+100)
      text('RHENIUM: 0.00000015% ',width/2,height/2+130)
    }
    else if (trig6) {
      rect(width/2-200,height/2-100,400,250)
      triangle(width/2+80,height-140,width/2-100,height-300,width/2+100,height-300)

      fill(0,255,0);
      noStroke();
      textAlign(CENTER);
      textSize(25);
      text('RHODIUM: 0%',width/2,height/2-80)
      text('PLATINUM: 0% ',width/2,height/2-50)
      text('GOLD: 0%',width/2,height/2-20)
      text('RUTHENIUM: 0.000002% ',width/2,height/2+10)
      text('IRIDIUM: 0%',width/2,height/2+40)
      text('OSMIUM: 0% ',width/2,height/2+70)
      text('PALLADIUM: 0%',width/2,height/2+100)
      text('RHENIUM: 0% ',width/2,height/2+130)
    }
    else if (trig7) {
      rect(width/2-200,height/2-100,400,250)
      triangle(width/2+110,height-140,width/2-100,height-300,width/2+100,height-300)

      fill(0,255,0);
      noStroke();
      textAlign(CENTER);
      textSize(25);
      text('RHODIUM: 0%',width/2,height/2-80)
      text('PLATINUM: 0% ',width/2,height/2-50)
      text('GOLD: 0%',width/2,height/2-20)
      text('RUTHENIUM: 0% ',width/2,height/2+10)
      text('IRIDIUM: 0%',width/2,height/2+40)
      text('OSMIUM: 0.000012% ',width/2,height/2+70)
      text('PALLADIUM: 0%',width/2,height/2+100)
      text('RHENIUM: 0% ',width/2,height/2+130)
    }


  /////////////////CLOUDS/////////////////////////////
      //refer scene1 for further details
        if(Math.random()<0.05){
              cloudA.push(new cloud(50));
        }

        if(Math.random()<0.05){
              cloudB.push(new cloud(200));
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

        for (var i = 0; i < cloudB.length; i++) {
            cloudB[i].show();
            cloudB[i].move();
            if (cloudB[i].x<0) {
              cloudB[i].over();
              }
        }

        for(var i = 0; i<cloudB.length; i++){
            if (cloudB[i].isItDeactive) {
              cloudB.splice(i,1);
            }
        }

  if (trigTotalArray[0]==true && trigTotalArray[1]==true && trigTotalArray[2]==true && trigTotalArray[3]==true && trigTotalArray[4]==true && trigTotalArray[5]==true && trigTotalArray[6]==true) {
    //When all the trigger values are true, the following code runs
    fill(255,0,0);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    textFont(lcdFont);
    text('! ALERT !'.substring(0, frameCount/2), width/2, 100); //reference
    fill(0,255,0);
    text('EQUIP HELMET (H)'.substring(0, frameCount/2), width/2, 150); //reference


    if (binoculars) { //On pressing H key, binoculars are activated
      binocular();
      ///////////////////////////////////////////////////////////////
      noStroke();
      textAlign(CENTER);
      textSize(20);
      textFont(lcdFont);
      fill(0,255,0);
      text('TOTAL RESOURCES FOUND: 0.00136227752%'.substring(0, frameCount/2), width/2, 200);
      text('OBJECTIVE: FIND HOSTILE SOURCE'.substring(0, frameCount/2), width/2, 250);
      text('Hint: Aim at the ground'.substring(0, frameCount/2), width/2, 300);
    }

  }

}
