function marsDialogue(){
  // This dialog option is minimalistic.
  // User can treat it as more of a transition.
    fill(50,50,50,128)
    rect(width/4-50,height/3-60,800,260)
    fill(0,255,0);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    text('*INCOMING CALL*',width/2,height/3-30)
    textAlign(LEFT);
    text("JEEVES: SIR, you needn't salvage your deliveries. Who knows what contaminants it contains. ",width/4-40,height/3)
    fill(255,0,0)
    textAlign(CENTER)
    text('*You can answer using the number keys*',width/2,height/3+75)
    textAlign(LEFT)
    fill(0,255,0)
    text("(SEND MESSAGE)-> Just GOING FOR A DRIVE, don't be alarmed. ",width/4-40,height/3+120)

}
