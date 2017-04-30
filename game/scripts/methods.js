function mousePressed() { //when the mouse is pressed
  if (loaded >= 2) { //if both the JSON and the background are loaded
    for (var i = 0; i < countries.length; i++) { //loop through the countries
      if (collidePointPoly(mouseX, mouseY, countries[i].path)) { //if the country has been clicked
        var box = prompt("You have cliked " + countries[i].name + ". To invade, enter the team name, to build a wall, enter \"wall\"", ""); //get an instruction
        if (box) {
          if (box.toLowerCase() == "wall") { //if they entered wall
            countries[i].wall = true //build a wall
          } else { // if they want to invade
            if (countries[i].wall) { //if there is a wall
              countries[i].wall = false //knock over the wall
            } else { //if there is no wall
              for (var j = 0; j < owners.length; j++) { //go through the owners
                if (owners[j].name.toLowerCase() == box.toLowerCase()) { //is it this one?
                  countries[i].owner = j; //change owners
                }
              }
            }
          }
        }
      }
    }
  }
}