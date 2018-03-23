var meteor;
var sceneNumber = 1; //current scene number
var cloudA = []; //upper cloud layer array
var cloudB = []; //lower cloud layer array
var trans = 255;
var rockA, rockB, rockC, rockD, rockE; //rocks initialization
var allRocks = []; //rocks array
var showRocks = [];
var trig1 = false; //trigger initialization
var trig2 = false;
var trig3 = false;
var trig4 = false;
var trig5 = false;
var trig6 = false;
var trig7 = false;
var trig8 = false;
var trigTotalArray = [false,false,false,false,false,false,false]; //all trigger array
var binoculars = false; //binoculars initialization
var counttrigTotalArray = 0; //total count of all trues in trigTotalArray
var rocket; //rocket variable
var earthDialogueAnswers = 0; //current answer
var earthDialoguePreviousAnswer = 0; //previous answer
var star = []; //array to store star, refer star.js
var spaceDialogueAnswers = 0;
var spaceDialoguePreviousAnswer = 0;
var marsDialogueAnswers = 0;
var marsDialoguePreviousAnswer = 0;
var option1 = 0; //Keeping track of dialog option1
var option2 = 0; //Keeping track of dialog option2
var option3 = 0; //Keeping track of dialog option3
var upsAndDowns = 0; //global random variable for landspeeder etc.

function preload() {
  lcdFont = loadFont('assets/digital-7.ttf'); //reference (http://www.1001fonts.com/digital-7-font.html)
  rockA = loadImage('assets/stone-576268_1280.png') //reference (https://pixabay.com/en/stone-rock-nature-pebble-zen-576268/)
  rockB = loadImage('assets/rock-576669_1280.png') //reference (https://pixabay.com/en/rock-boulder-stone-nature-granite-576669/)
  rockC = loadImage('assets/rocks-576663_1280.png') //reference (https://pixabay.com/en/rocks-mountain-nature-stone-gray-576663/)
  rockD = loadImage('assets/rock-576684_1280.png') //reference (https://pixabay.com/en/rock-boulder-stone-nature-granite-576684/)
  rockE = loadImage('assets/rock-576682_1280.png') //reference (https://pixabay.com/en/rock-boulder-stone-nature-granite-576682/)
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    c1 = color(42,70,78); //initialize colour
    c2 = color(175,170,153);
    cMid = color(203,137,77);
    white = color(255,255,255);
    meteor = new Meteor(width-100,0); //initialize meteor
    meteorB = new Meteor(width-100,-30);
    meteorC = new Meteor(width-70,-20);
    meteorD = new Meteor(width-70,-50);
    meteorE = new Meteor(width-40,-60);
    allRocks = [rockA,rockB,rockC,rockD,rockE]; //initialize rocks array
    rocket = new Rocket(width/2,height-100) //initialize rocket
    for (var i = 0; i <= 70; i++) {
    star[i] = new stars();
    }

}


function draw() {
  upsAndDowns = random(190,200) //Randomly moves the landspeeder up or down in the canvas to give the effect of flying.
  // The following lines of code select appropriate scene on the basis of current sceneNumber.
  if(sceneNumber == 1){
  scene1();
  }

  if (sceneNumber == 2) {
  scene2();
  }

  if (sceneNumber == 3) {
  scene3();
  }

  if (sceneNumber == 4) {
  scene4();
  }

  if (sceneNumber == 5) {
  scene5();
  }

  if (sceneNumber == 6) {
  scene6();
  }
  if (sceneNumber == 7) {
  scene7();
  }
  if (sceneNumber == 8) {
  scene8();
  }
  if (sceneNumber == 9) {
  scene9();
  }
  if (sceneNumber == 10) {
  scene10();
  }
  if (sceneNumber == 11) {
  scene11();
  }
  if (sceneNumber == 12) {
  scene12();
  }
  if (sceneNumber == 13) {
  scene13();
  }
  if (sceneNumber == 14) {
  scene14();
  }
}

function keyTyped(){
  if (key == 'n' || key == 'N') {
    if (sceneNumber == 1) {
      scene2();
      sceneNumber = 2;

    }

    else if (sceneNumber == 5) {
      scene10();
      sceneNumber = 10;

    }
  }

  if (key == 'p') {
    saveCanvas("thumbnail.png")
  }


if (key == ' ') {
    if (sceneNumber == 2) {
      scene3();
      sceneNumber = 3;
    }

  else if (sceneNumber == 3) {
    if (earthDialogueAnswers >= 5) {
      scene4();
      sceneNumber = 4;
    }
  }

  else if (sceneNumber == 4) {
    scene5();
    sceneNumber = 5;
  }

  else if (sceneNumber == 6) {
    scene7();
    sceneNumber = 7;
  }

  else if (sceneNumber == 7) {
    if (spaceDialogueAnswers >= 8) {
      scene8();
      sceneNumber = 8;
    }
  }

  else if (sceneNumber == 8) {
      scene9();
      sceneNumber = 9;
    }
  else if (sceneNumber == 9) {
      scene10();
      sceneNumber = 10;
    }
  else if (sceneNumber == 10) {
      scene11();
      sceneNumber = 11;
    }
  else if (sceneNumber == 11) {
      scene12();
      sceneNumber = 12;
    }
  else if (sceneNumber == 12) {
      scene13();
      sceneNumber = 13;
    }
  else if (sceneNumber == 13) {
      scene14();
      sceneNumber = 14;
    }
}


//select dialog options

  if (key == '1') {
    if (sceneNumber == 3) {
        earthDialogueAnswers += 1;
        earthDialoguePreviousAnswer = 1;
        option1+=1;
      }
    else  if (sceneNumber == 7) {
          spaceDialogueAnswers += 1;
          spaceDialoguePreviousAnswer = 1;
          option1+=1;
        }
    }
  if (key == '2') {
      if (sceneNumber == 3) {
          earthDialogueAnswers += 1;
          earthDialoguePreviousAnswer = 2;
          option2+=1;
        }
      else if (sceneNumber == 7) {
            spaceDialogueAnswers += 1;
            spaceDialoguePreviousAnswer = 2;
            option2+=1;
          }
      }
  if (key == '3') {
      if (sceneNumber == 3) {
          earthDialogueAnswers += 1;
          earthDialoguePreviousAnswer = 3;
          option3+=1;
        }
      else if (sceneNumber == 7) {
            spaceDialogueAnswers += 1;
            spaceDialoguePreviousAnswer = 3;
            option3+=1;
          }
      }

  if (key == 'h' || key == 'H') { //puts helmet on, refer scene5
    if (sceneNumber == 5) {
      if (trigTotalArray[0]==true && trigTotalArray[1]==true && trigTotalArray[2]==true && trigTotalArray[3]==true && trigTotalArray[4]==true && trigTotalArray[5]==true && trigTotalArray[6]==true) {
          trig1 = false;
          trig2 = false;
          trig3 = false;
          trig4 = false;
          trig5 = false;
          trig6 = false;
          trig7 = false;
          binoculars = true;

      }
    }
  }
}

function mousePressed(){
  //This function relates to the mousePressed event in scene 5
  if (sceneNumber==5) {
    if (mouseX>=width/2 && mouseX <=width/2+30 ) {
      if (mouseY>=height-120 && mouseY<=height-70) {
        trig1 = true;
        trig2 = false;
        trig3 = false;
        trig4 = false;
        trig5 = false;
        trig6 = false;
        trig7 = false;
        trigTotalArray[0] = true;
      }
    }
    else if (mouseX>=width/2+30 && mouseX <=width/2+70 ) {
      if (mouseY>=height-140 && mouseY<=height-100) {
        trig1 = false;
        trig2 = true;
        trig3 = false;
        trig4 = false;
        trig5 = false;
        trig6 = false;
        trig7 = false;
        trigTotalArray[1] = true;
      }
    }
    else if (mouseX>=width/2-50 && mouseX <=width/2 ) {
      if (mouseY>=height-140 && mouseY<=height-100) {
        trig1 = false;
        trig2 = false;
        trig3 = true;
        trig4 = false;
        trig5 = false;
        trig6 = false;
        trig7 = false;
        trigTotalArray[2] = true;
      }
    }
    else if (mouseX>=width/2-70 && mouseX <=width/2-50 ) {
      if (mouseY>=height-140 && mouseY<=height-100) {
        trig1 = false;
        trig2 = false;
        trig3 = false;
        trig4 = true;
        trig5 = false;
        trig6 = false;
        trig7 = false;
        trigTotalArray[3] = true;
      }
    }
    else if (mouseX>=width/2-160 && mouseX <=width/2-70 ) {
      if (mouseY>=height-150 && mouseY<=height-100) {
        trig1 = false;
        trig2 = false;
        trig3 = false;
        trig4 = false;
        trig5 = true;
        trig6 = false;
        trig7 = false;
        trigTotalArray[4] = true;
      }
    }
    else if (mouseX>=width/2+70 && mouseX <=width/2+100 ) {
      if (mouseY>=height-150 && mouseY<=height-110) {
        trig1 = false;
        trig2 = false;
        trig3 = false;
        trig4 = false;
        trig5 = false;
        trig6 = true;
        trig7 = false;
        trigTotalArray[5] = true;
      }
    }
    else if (mouseX>=width/2+100 && mouseX <=width/2+135 ) {
      if (mouseY>=height-150 && mouseY<=height-110) {
        trig1 = false;
        trig2 = false;
        trig3 = false;
        trig4 = false;
        trig5 = false;
        trig6 = false;
        trig7 = true;
        trigTotalArray[6] = true;
      }
    }
    else{
      trig1 = false;
      trig2 = false;
      trig3 = false;
      trig4 = false;
      trig5 = false;
      trig6 = false;
      trig7 = false;
    }
  }

  if (sceneNumber==12){
    if (mouseX>=width/2-200 && mouseX <=width/2+200 ) {
          if (mouseY>=height/3 && mouseY<=height) {
                    trig8 = true;
                  }
                }
}
}
