function spaceDialogue(){
  // The following dialog takes place in SCENE 7.
  // The dialog responds appropriately to the user's input.
  // Positive reaction will get a positive next dialog.
  // However, negative reaction will get a negative dialog.
  // Positive, negative and neutral responses are recorded in appropriate variables (see sketch.js)
  // Core functionality is similar to the way the project handles scenes. (see sketch.js)
  
  //Q1
  if (spaceDialogueAnswers==0 && spaceDialoguePreviousAnswer == 0) {
    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,350)
    fill(0,255,0);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    text('*INCOMING CALL*',width/2,height/3-30)
    textAlign(LEFT);
    text("Ground Control: How's the weather up there? ",width/4-40,height/3)
    fill(255,0,0)
    textAlign(CENTER)
    text('*You can answer using the number keys*',width/2,height/3+75)
    textAlign(LEFT)
    fill(0,255,0)
    text("1: *Play Simon & Garfunkel- The Sound of Silence*",width/4-40,height/3+120)
    text("2: Funny GC! How can I help you? ",width/4-40,height/3+150)
    text("3: ... ",width/4-40,height/3+180)
  }
  //Q2
  else if (spaceDialogueAnswers == 1) {

    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,350)
    fill(0,255,0);
    noStroke();
    textSize(20);
    textAlign(LEFT);
    if (spaceDialoguePreviousAnswer == 1) {

      text("GC: Cute. Well this isn't your maiden voyage. But I will still have to go through a checklist; your ",width/4-40,height/3)
      text("       screen must be indicating awaiting commands. The lights to your left must be glowing randomly.",width/4-40,height/3+30)
      text("       Both of this indicates that the auto pilot is turned on. We have checked the fuel, speed, ",width/4-40,height/3+60)
      text("       direction vectors. Looks like the A.I. is taking care of everything. ",width/4-40,height/3+90)
    }
    else if (spaceDialoguePreviousAnswer == 2) {
      text("GC: I will be quick; this isn't your maiden flight. But I will still have to go through a checklist; your ",width/4-40,height/3)
      text("       screen must be indicating awaiting commands. The lights to your left will glowing randomly",width/4-40,height/3+30)
      text("       both of this indicates, the auto pilot is turned on. We have checked the fuel, speed, ",width/4-40,height/3+60)
      text("       direction vectors. Looks like the A.I. is taking care of everything. ",width/4-40,height/3+90)

    }
    else if (spaceDialoguePreviousAnswer == 3) {
      text("GC: Okay,then. Well this isn't your maiden flight. But I will still have to go through a checklist; your ",width/4-40,height/3)
      text("       screen must be indicating awaiting commands. The lights to your left will glowing randomly",width/4-40,height/3+30)
      text("       both of this indicates, the auto pilot is turned on. We have checked the fuel, speed, ",width/4-40,height/3+60)
      text("       direction vectors. Looks like the A.I. is taking care of everything. ",width/4-40,height/3+90)

    }

    text("1: Can't wait for them to invent your A.I. replacement. ",width/4-40,height/3+120)
    text("2: I should have brought one of those space maritinis with me. ",width/4-40,height/3+150)
    text("3: OK ",width/4-40,height/3+180)

  }
  //Q3
  else if (spaceDialogueAnswers == 2) {

    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,350)
    fill(0,255,0);
    noStroke();
    textSize(20);
    textAlign(LEFT);
    if (spaceDialoguePreviousAnswer == 1) {

      text("GC: Between you and me, I am actually working on that. I would love an early retirement. ",width/4-40,height/3)
      text("       Before I leave though, I will have to patch in the tv host from 23 News",width/4-40,height/3+30)
      text("       for the interview. ",width/4-40,height/3+60)

    }
    else if (spaceDialoguePreviousAnswer == 2) {
      text("GC: Sure thing, Mr. Bond. ",width/4-40,height/3)
      text("       Before I leave though, I will have to patch in the tv host from 23 News",width/4-40,height/3+30)
      text("       for the interview. ",width/4-40,height/3+60)

    }
    else if (spaceDialoguePreviousAnswer == 3) {
      text("GC: Ok, Before I leave though, I will have to patch in the tv host from 23 News",width/4-40,height/3)
      text("       for the interview.",width/4-40,height/3+30)

    }

    text("1: Oh...Yeah...the interview. Go ahead. ",width/4-40,height/3+120)
    text("2: Ready when you are.",width/4-40,height/3+150)
    text("3: ... ",width/4-40,height/3+180)

  }

  //Q4
  else if (spaceDialogueAnswers == 3) {

    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,350)
    fill(0,255,0);
    noStroke();
    textSize(20);
    textAlign(LEFT);
    if (spaceDialoguePreviousAnswer == 1) {

      text("Interviewer: Commander McNamara is one of the oldest serving astronauts from Australia. He has",width/4-40,height/3)
      text("       done 18 spaceflights so far, and it doesn't seem like it will be slowing down anytime soon. ",width/4-40,height/3+30)
      text("       Thank you for joining us today. ",width/4-40,height/3+60)

    }
    else if (spaceDialoguePreviousAnswer == 2) {
      text("Interviewer: Commander McNamara is one of the oldest serving astronauts from Australia. He has",width/4-40,height/3)
      text("       done 18 spaceflights so far, and it doesn't seem like it will be slowing down anytime soon. ",width/4-40,height/3+30)
      text("       Thank you for joining us today. ",width/4-40,height/3+60)

    }
    else if (spaceDialoguePreviousAnswer == 3) {
      text("Interviewer: Commander McNamara is one of the oldest serving astronauts from Australia. He has",width/4-40,height/3)
      text("       done 18 spaceflights so far, and it doesn't seem like it will be slowing down anytime soon. ",width/4-40,height/3+30)
      text("       Thank you for joining us today. ",width/4-40,height/3+60)

    }
    text("1: Thank you for having me. ",width/4-40,height/3+120)
    text("2: Thank you for having me. I am honoured. ",width/4-40,height/3+150)
    text("3: Thank you. ",width/4-40,height/3+180)

  }

  //Q5
  else if (spaceDialogueAnswers == 4) {

        fill(50,50,50,128)
        rect(width/4-50,height/3-60,800,350)
        fill(0,255,0);
        noStroke();
        textSize(20);
        textAlign(LEFT);
        if (spaceDialoguePreviousAnswer == 1) {

          text("Inter: It has been nearly a century since the last major Australian Mining boom. Do you think",width/4-40,height/3)
          text("       the current one is still in its infancy or are we living in a bubble again? ",width/4-40,height/3+30)

        }
        else if (spaceDialoguePreviousAnswer == 2) {
          text("Inter: It has been nearly a century since the last major Australian Mining boom. Do you think",width/4-40,height/3)
          text("       the current one is still in its infancy or are we living in a bubble again? ",width/4-40,height/3+30)

        }
        else if (spaceDialoguePreviousAnswer == 3) {
          text("Inter: It has been nearly a century since the last major Australian Mining boom. Do you think",width/4-40,height/3)
          text("       the current one is still in its infancy or are we living in a bubble again? ",width/4-40,height/3+30)

        }
        text("1: We still have great heights to achieve. ",width/4-40,height/3+120)
        text("2: We should be cautious. ",width/4-40,height/3+150)
        text("3: Cannot comment on that. ",width/4-40,height/3+180)

  }

  //Q6
  else if (spaceDialogueAnswers == 5) {


        fill(50,50,50,128)
        rect(width/4-50,height/3-60,800,350)
        fill(0,255,0);
        noStroke();
        textSize(20);
        textAlign(LEFT);
        if (spaceDialoguePreviousAnswer == 1) {

          text("Inter: Hmmm, well who doesn't like progress!",width/4-40,height/3)
          text("       Australian Space Institute (ASI) will be celebrating it 50th Anniversary this year. ",width/4-40,height/3+30)
          text("       What is your opinion about the increased lobbying from private companies, trying to",width/4-40,height/3+60)
          text("       send their own ships to the Asteroid belt and beyond?",width/4-40,height/3+90)

        }
        else if (spaceDialoguePreviousAnswer == 2) {
          text("Inter: Hmmm, well we should always learn from our past.",width/4-40,height/3)
          text("       Australian Space Institute (ASI) will be celebrating it 50th Anniversary this year. ",width/4-40,height/3+30)
          text("       What is your opinion about the increased lobbying from private companies, trying to",width/4-40,height/3+60)
          text("       send their own ships to the Asteroid belt and beyond?",width/4-40,height/3+90)

        }
        else if (spaceDialoguePreviousAnswer == 3) {
          text("Inter: Next Question then!",width/4-40,height/3)
          text("       Australian Space Institute (ASI) will be celebrating it 50th Anniversary this year. ",width/4-40,height/3+30)
          text("       What is your opinion about the increased lobbying from private companies, trying to",width/4-40,height/3+60)
          text("       send their own ships to the Asteroid belt and beyond?",width/4-40,height/3+90)

        }
        text("1: The current supply chain from the Asteroid belt to Mars and then to Earth should be untouched. ",width/4-40,height/3+120)
        text("2: Competition helps develop technologies at a faster rate.",width/4-40,height/3+150)
        text("3: No Comment. ",width/4-40,height/3+180)

  }

  //Q7
  else if (spaceDialogueAnswers == 6) {


        fill(50,50,50,128)
        rect(width/4-50,height/3-60,800,350)
        fill(0,255,0);
        noStroke();
        textSize(20);
        textAlign(LEFT);
        if (spaceDialoguePreviousAnswer == 1) {

          text("Inter: I say leave it to the experts.",width/4-40,height/3)
          text("       What is your opinion on scavengers, on Earth? ",width/4-40,height/3+30)

        }
        else if (spaceDialoguePreviousAnswer == 2) {
          text("Inter: Well said.",width/4-40,height/3)
          text("       What is your opinion on scavengers, on Earth? ",width/4-40,height/3+30)

        }
        else if (spaceDialoguePreviousAnswer == 3) {
          text("Inter: No problem, Our next question is",width/4-40,height/3)
          text("       What is your opinion on scavengers, on Earth? ",width/4-40,height/3+30)

        }
        text("1: Minerals extracted by anyone but the authorized party, is a criminal offence.",width/4-40,height/3+120)
        text("2: Used equipment from Mars is unsafe and financially unsuitable for mineral extraction on Earth.",width/4-40,height/3+150)
        text("3: No Comment. ",width/4-40,height/3+180)

  }

  //Q7
  else if (spaceDialogueAnswers == 7) {


        fill(50,50,50,128)
        rect(width/4-50,height/3-60,800,350)
        fill(0,255,0);
        noStroke();
        textSize(20);
        textAlign(LEFT);
        if (spaceDialoguePreviousAnswer == 1) {

          text("Inter: Follow the law, Ladies and Gentlemen. The current supply chain, uses controlled explosions",width/4-40,height/3)
          text("       To either propel asteroids to Earth or Mars; depending on the location of the client; or ",width/4-40,height/3+30)
          text("       mine them within space. This adds a lot of pollutants to space and the planets.",width/4-40,height/3+60)
          text("       Do you think there are better ways to mine?",width/4-40,height/3+90)

        }
        else if (spaceDialoguePreviousAnswer == 2) {
          text("Inter: Food for thought, Ladies and Gentlemen. The current supply chain, uses controlled explosions",width/4-40,height/3)
          text("       To either propel asteroids to Earth or Mars; depending on the location of the client; or ",width/4-40,height/3+30)
          text("       mine them within space. This adds a lot of pollutants to space and the planets.",width/4-40,height/3+60)
          text("       Do you think there are better ways to mine?",width/4-40,height/3+90)

        }
        else if (spaceDialoguePreviousAnswer == 3) {
          text("Inter: Next Question then. The current supply chain, uses controlled explosions",width/4-40,height/3)
          text("       To either propel asteroids to Earth or Mars; depending on the location of the client; or ",width/4-40,height/3+30)
          text("       mine them within space. This adds a lot of pollutants to space and the planets.",width/4-40,height/3+60)
          text("       Do you think there are better ways to mine?",width/4-40,height/3+90)

        }
        text("1: To meet consumer demands, there are no cost effective methods.",width/4-40,height/3+120)
        text("2: We are researching into it currently.",width/4-40,height/3+150)
        text("3: No Comment. ",width/4-40,height/3+180)

  }

  else if (spaceDialogueAnswers == 8) {


        fill(50,50,50,128)
        rect(width/4-50,height/3-60,800,350)
        fill(0,255,0);
        noStroke();
        textSize(20);
        textAlign(LEFT);
        if (spaceDialoguePreviousAnswer == 1) {

          text("Inter: Well that's all the time we have for tonight. Thank you for joining us Commander",width/4-40,height/3)
          text("       Good Night",width/4-40,height/3+30)

        }
        else if (spaceDialoguePreviousAnswer == 2) {
          text("Inter: Well that's all the time we have for tonight. Thank you for joining us Commander",width/4-40,height/3)
          text("       Good Night",width/4-40,height/3+30)

        }
        else if (spaceDialoguePreviousAnswer == 3) {
          text("Inter: Well that's all the time we have for tonight. Thank you for joining us Commander",width/4-40,height/3)
          text("       Good Night",width/4-40,height/3+30)

        }
        text("1: Thank you. (Press SPACE to end call)",width/4-40,height/3+120)
        text("2: Good Night (Press SPACE to end call)",width/4-40,height/3+150)
        text("3: ...(Press SPACE to end call)",width/4-40,height/3+180)

  }

}
