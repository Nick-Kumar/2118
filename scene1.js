function scene1(){
  // The first scene of the storyline.
  setGradient(0, 0, windowWidth, windowHeight, c1, c2);
  noStroke();
  // Meteor shower
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
  ellipse(width-200,height/3,150,150);
  fill(182,45,39);
  bezier(0, height-100, width/3, height-300, width/3, height, width, height-100);
  fill(159,34,36);
  bezier(0, height-100, width/2, height, width/2, height-300, width, height-100);
  fill(65,9,20)
  rect(0,height-100,width,100);
  bezier(0, height-100, width/2, height, width/2, height-200, width, height-100);
  bezier(0, height-100, width/2, height-200, width/2, height, width, height-100);

/////////////////CLOUDS/////////////////////////////

      if(Math.random()<0.05){
            cloudA.push(new cloud(50)); //Creates new cloud and pushes into array
      }

      if(Math.random()<0.05){
            cloudB.push(new cloud(200));
      }

      for (var i = 0; i < cloudA.length; i++) {
          cloudA[i].show();   //Shows individual cloud from the array
          cloudA[i].move();   //Moves individual cloud in the array
          if (cloudA[i].x<0) {
            cloudA[i].over(); //After the cloud goes off screen it is marked as deactive
          }
      }

      for(var i = 0; i<cloudA.length; i++){
        if (cloudA[i].isItDeactive) {
          cloudA.splice(i,1); //All deactivated clouds are deleted
        }
      }

      for (var i = 0; i < cloudB.length; i++) { //Same as above, but for cloudB array
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
