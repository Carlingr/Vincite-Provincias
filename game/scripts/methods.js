function mousePressed() { //when the mouse is pressed
  if (countries) {
    for (var i = 0; i < countries.length; i++) { //go through the countries
      countries[i].invade() //if a country is clicked, invade it.
    }
  }
}

function windowResized() {
  if (backWidth / backHeight > windowWidth / windowHeight) { //if the limiting dimention is  Width
    loc.scle = windowWidth / backWidth; // use the width to determine the scale
  } else { //if the limiting dimention is height
    loc.scle = windowHeight / backHeight; // use the height to determine the scale
  }
  resizeCanvas((backWidth * loc.scle) + loc.x, (backHeight * loc.scle) + loc.y); //make the canvas fit the background
}