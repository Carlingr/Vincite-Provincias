function mousePressed() { //when the mouse is pressed
  for (var i = 0; i < countries.length; i++) { //go through the countries
    countries[i].invade() //if a country is clicked, invade it.
  }
}

function windowResized() {
  var backWidth = 992;
  var backHeight = 687;
  scale(1 / loc.scle)
  if (backWidth / backHeight > windowWidth / windowHeight) { //if the limiting dimention is  Width
    loc.scle = windowWidth / backWidth; // use the width to determine the scale
  } else { //if the limiting dimention is height
    loc.scle = windowHeight / backHeight; // use the height to determine the scale
  }

  scale(loc.scle)
  resizeCanvas(windowWidth, windowHeight);
}
