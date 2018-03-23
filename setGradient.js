function setGradient(x, y, w, h, c1, c2) {
  // This function sets the gradient of a particular scene.
  // The inputs are x -> x coordinate
  // y -> y coordinate
  // w -> width
  // h -> height
  // c1 -> first colour
  // c2 -> second colour
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h/1.75, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
//reference (->Set Gradient (https://p5js.org/examples/color-linear-gradient.html))
