function mousePressed() { //when the mouse is pressed
  if (loaded >= 2) { //if both the JSON and the background are loaded
    for (var i = 0; i < countries.length; i++) { //loop through the countries
      if (collidePointPoly(mouseX, mouseY, countries[i].path)) {
        countries[i].owner++; //cycle through the owners
        if (countries[i].owner > owners.length - 1) { // restart if we have run out of owners
          countries[i].owner = 0;
        }
      }
    }
  }
}