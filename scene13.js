function scene13(){
  background(25);

  fill(0,255,0);
  noStroke();
  textAlign(CENTER);
  textSize(20);

  text('CONGRATULATIONS! YOU COMPLETED THE STORY, HERE ARE YOUR STATS '.substring(0, frameCount/2),width/2,50)
  text('COMMANDER MCNAMARA '.substring(0, frameCount-75/2),width/2,150)
  text('TOTAL INCOME TODAY: $4085 '.substring(0, frameCount-75/2),width/2,200)
  text('RESOURCES FOUND: N/A '.substring(0, frameCount-75/2),width/2,250)
  text('DISTANCE TRAVELLED: 45.3 MILLION KM '.substring(0, frameCount-75/2),width/2,300)
  if(option3>option2 && option3>option1){
    text('DIALOG STYLE: YOU DONT TALK MUCH, DO YOU?'.substring(0, frameCount-75/2),width/2,400)
    text('PRESS (SPACE) TO CONTINUE'.substring(0, frameCount-75/2),width/2,400)
  }
  else if (option2>option1) {
    text('DIALOG STYLE: STRAIGHTFORWARD, AND BLUNT'.substring(0, frameCount-75/2),width/2,400)
    text('PRESS (SPACE) TO CONTINUE'.substring(0, frameCount-75/2),width/2,400)
  }
  else {
    text('DIALOG SCORE: KIND AND CONSIDERATE'.substring(0, frameCount-75/2),width/2,400)
    text('PRESS (SPACE) TO CONTINUE'.substring(0, frameCount-75/2),width/2,450)
  }


  textSize(20);
  text('JOEL '.substring(0, frameCount-75/2),150,150)
  text('TOTAL INCOME TODAY: $207 '.substring(0, frameCount-75/2),150,200)
  text('RESOURCES FOUND: 0.00136227752 GRAMS '.substring(0, frameCount-75/2),150,250)
  text('DISTANCE TRAVELLED: 315.6 KM'.substring(0, frameCount-75/2),150,300)


  textSize(20);
  text('LUTHOR '.substring(0, frameCount-75/2),width-200,150)
  text('TOTAL INCOME TODAY: $66,549,874 '.substring(0, frameCount-75/2),width-200,200)
  text('RESOURCES FOUND: 99.999999 GRAMS '.substring(0, frameCount-75/2),width-200,250)
  text('DISTANCE TRAVELLED: 124 KM '.substring(0, frameCount-75/2),width-200,300)


  ///////////////////BENHAM/////////////////////////

    push();
    translate(width/2,height-100);
    rotate(frameCount);
    Benham(0,0,250);
    pop();

////////////////////////////////////////////////////

}
