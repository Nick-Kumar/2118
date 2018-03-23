function earthDialogue(){
  // The following dialog takes place in SCENE 3.
  // The dialog responds appropriately to the user's input.
  // Positive reaction will get a positive next dialog.
  // However, negative reaction will get a negative dialog.
  // Positive, negative and neutral responses are recorded in appropriate variables (see sketch.js)
  // Core functionality is similar to the way the project handles scenes. (see sketch.js)
  //Q1
  if (earthDialogueAnswers==0 && earthDialoguePreviousAnswer == 0) {
    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,260)
    fill(0,255,0);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    text('*INCOMING CALL*',width/2,height/3-30)
    textAlign(LEFT);
    text("HUGO: Mate, don't bother going. It's been stripped apart. The big dogs came by and salvaged ",width/4-40,height/3)
    text("         everything. ",width/4-40,height/3+30)
    fill(255,0,0)
    textAlign(CENTER)
    text('*You can answer using the number keys*',width/2,height/3+75)
    textAlign(LEFT)
    fill(0,255,0)
    text("1: So that's it then? ",width/4-40,height/3+120)
    text("2: Maybe they left something behind? ",width/4-40,height/3+150)
    text("3: ... ",width/4-40,height/3+180)
  }
  //Q2
  else if (earthDialogueAnswers == 1) {

    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,260)
    fill(0,255,0);
    noStroke();
    textSize(20);
    textAlign(LEFT);
    if (earthDialoguePreviousAnswer == 1) {
      text("HUGO: Pretty much... although we just need 0.1% of any metal in the asteriod. There is no ",width/4-40,height/3)
      text("         harm in taking a look at it. ",width/4-40,height/3+30)

    }
    else if (earthDialoguePreviousAnswer == 2) {
      text("HUGO: It has happened before. We just need 0.1% of any metal in the asteriod. There is no ",width/4-40,height/3)
      text("         harm in taking a look at it. ",width/4-40,height/3+30)

    }
    else if (earthDialoguePreviousAnswer == 3) {
      text("HUGO: Why don't you give it a shot? We just need 0.1% of any metal in the asteriod. There  ",width/4-40,height/3)
      text("         is no harm in taking a look at it. ",width/4-40,height/3+30)

    }

    text("1: Hmmm ",width/4-40,height/3+120)
    text("2: Right'O. I am on it. ",width/4-40,height/3+150)
    text("3: ... ",width/4-40,height/3+180)

  }
  //Q3
  else if (earthDialogueAnswers == 2) {

    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,260)
    fill(0,255,0);
    noStroke();
    textSize(20);
    textAlign(LEFT);
    if (earthDialoguePreviousAnswer == 1) {

      text("HUGO: Don't grouch, mate. Case of beer on me. I know it's your first job in 8 months. All ",width/4-40,height/3)
      text("         you have known is flipping whoppers all your life. There are ups and downs to ",width/4-40,height/3+30)
      text("         this job, just like any other out there. ",width/4-40,height/3+60)

    }
    else if (earthDialoguePreviousAnswer == 2) {
      text("HUGO: THat's the spirit! Case of beer on me. I know it's your first job in 8 months. All ",width/4-40,height/3)
      text("         you have known is flipping whoppers all your life. There are ups and downs to ",width/4-40,height/3+30)
      text("         this job, just like any other out there. ",width/4-40,height/3+60)

    }
    else if (earthDialoguePreviousAnswer == 3) {
      text("HUGO: Stop sulkin'. Case of beer on me. I know it's your first job in 8 months. All ",width/4-40,height/3)
      text("         you have known is flipping whoppers all your life. There are ups and downs to ",width/4-40,height/3+30)
      text("         this job, just like any other out there. ",width/4-40,height/3+60)

    }

    text("1: What's the point if A.I. is gonna end up doing everything, anyway?! ",width/4-40,height/3+120)
    text("2: Sure beats flipping burgers! Hope the A.I. doesn't take over the pod.",width/4-40,height/3+150)
    text("3: ... ",width/4-40,height/3+180)

  }

  //Q4
  else if (earthDialogueAnswers == 3) {

    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,260)
    fill(0,255,0);
    noStroke();
    textSize(20);
    textAlign(LEFT);
    if (earthDialoguePreviousAnswer == 1) {

      text("HUGO: You know that's not true. The ethics law passed eighty years ago. Those recent cases ",width/4-40,height/3)
      text("         you saw on the news are a one-off fluke. ",width/4-40,height/3+30)
      text("         If nothing else, just do this for Sally. ",width/4-40,height/3+60)

    }
    else if (earthDialoguePreviousAnswer == 2) {
      text("HUGO: You know that's not true. The ethics law passed eighty years ago. Those recent cases ",width/4-40,height/3)
      text("         you saw on the news are a one-off fluke. ",width/4-40,height/3+30)
      text("         Just think about Sally. ",width/4-40,height/3+60)


    }
    else if (earthDialoguePreviousAnswer == 3) {
      text("HUGO: Well, if you ever feel any discomfort, just think about home. That's what I do anyway. ",width/4-40,height/3)
    }

    text("1: Fine. ",width/4-40,height/3+120)
    text("2: Good Advice. ",width/4-40,height/3+150)
    text("3: ... ",width/4-40,height/3+180)

  }

  //Q5
  else if (earthDialogueAnswers == 4) {

    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,260)
    fill(0,255,0);
    noStroke();
    textSize(20);
    textAlign(LEFT);
    if (earthDialoguePreviousAnswer == 1) {

      text("HUGO: (Sigh) Just watch out for any competition. Your visor will alert you of any ",width/4-40,height/3)
      text("         oncoming danger. Both organic and inorganic threats. Put your helmet on,",width/4-40,height/3+30)
      text("         if your visor alerts you. Remember to scan every meteorite. ",width/4-40,height/3+60)

    }
    else if (earthDialoguePreviousAnswer == 2) {
      text("HUGO: Watch out for any competition. Your visor will alert you of any oncoming danger.",width/4-40,height/3)
      text("         Both organic and inorganic threats. Put your helmet on,",width/4-40,height/3+30)
      text("         if your visor alerts you. Remember to scan every meteorite. ",width/4-40,height/3+60)


    }
    else if (earthDialoguePreviousAnswer == 3) {
      text("HUGO: Well, watch out for any competition. Your visor will alert you of any oncoming danger.",width/4-40,height/3)
      text("         Both organic and inorganic threats. Put your helmet on,",width/4-40,height/3+30)
      text("         if your visor alerts you. Remember to scan every meteorite. ",width/4-40,height/3+60)
    }

    text("1: Yeah. Sure. ",width/4-40,height/3+120)
    text("2: Don't worry. Got everything under control. ",width/4-40,height/3+150)
    text("3: ...(grunt)... ",width/4-40,height/3+180)

  }

  //Q5
  else if (earthDialogueAnswers == 5) {

    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,260)
    fill(0,255,0);
    noStroke();
    textSize(20);
    textAlign(LEFT);
    if (earthDialoguePreviousAnswer == 1) {

      text("HUGO: Okay, then... ",width/4-40,height/3)

    }
    else if (earthDialoguePreviousAnswer == 2) {
      text("HUGO: Take Care.",width/4-40,height/3)


    }
    else if (earthDialoguePreviousAnswer == 3) {
      text("HUGO: ...(grunts back)...",width/4-40,height/3)
    }

    text("1: Press (SPACE) TO EXIT ",width/4-40,height/3+120)
    text("2: Press (SPACE) TO EXIT ",width/4-40,height/3+150)
    text("3: ...(grunt and press SPACE)... ",width/4-40,height/3+180)

  }

}
