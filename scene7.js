function scene7(){
  // The seventh scene of the storyline.
  // This is the space scene of the storyline.
  background(0)


  for (var i = 0; i < star.length; i++) {
      star[i].show(); //shows star on the screen
  }

  spaceship(); //refer spaceship.js
  spaceDialogue(); //refer spaceDialogue.js



}
