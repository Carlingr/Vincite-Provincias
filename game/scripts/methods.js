function mousePressed() { //when the mouse is pressed
  var box;
  var clicked = false; //has a country been clicked?
  if (loaded >= 3) { //if both the JSON and the background are loaded
    for (var i = 0; i < countries.length; i++) { //loop through the countries
      if (collidePointPoly(mouseX, mouseY, countries[i].path)) { //if the country has been clicked
        box = prompt("You have cliked " + countries[i].name + ". To invade, enter the team name, to build a wall, enter \"wall\"", ""); //get an instruction
        clicked = true; //we have clicked a country
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
    if (!clicked) {
      var overColor = color(canvas.get(mouseX, mouseY)); //gets the color of the canvas under the mouse
      var oceanColor = color(175, 221, 223); //define the ocean color
      if ((overColor.levels[0] == oceanColor.levels[0]) && (overColor.levels[1] == oceanColor.levels[1])) { //if we clicked an ocean
        box = prompt("You have clicked the ocean, to make a boat, enter a team name", ""); //get an instruction
        clicked = true; //we have clicked the ocean
        if (box) {
          for (var j = 0; j < owners.length; j++) { //go through the owners
            if (owners[j].name.toLowerCase() == box.toLowerCase()) { //is it this one?
              ship.ships.push(new Ship(mouseX, mouseY, j)); //change owners
              console.log(ship.ships);
            }
          }
        }
      }
    }
  }
}