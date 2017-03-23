function mousePressed() { //when the mouse is pressed
  if (countries) {
    for (var i = 0; i < countries.length; i++) { //go through the countries
      if ((abs(mouseX - ((countries[i].txtX + loc.x) * loc.scle)) < textWidth(countries[i].name) / 2) && (abs(mouseY - ((countries[i].txtY + loc.y) * loc.scle)) < titleSize)) { //if a country is clicked
        countries[i].owner++; //cycle through the owners
        if (countries[i].owner > owners.length - 1) { // restart if we have run out of owners
          countries[i].owner = 0
        }
      }
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