function mousePressed() { //when the mouse is pressed
  var box;
  var clicked = false; //changes to true when we know what has been clicked. reset on each mousepress
  if (loaded >= 3) { //if both the JSON and the background are loaded
    for (var i = 0; i < countries.length; i++) { //loop through the countries
      if (collidePointPoly(mouseX, mouseY, countries[i].path)) { //if the country has been clicked
        box = prompt("You have clicked " + countries[i].name + ". Enter a team name to invade, or build one of the following - \"wall\", \"hippo\", or \"croc\" by entering it in the box below.", ""); //get an instruction
        clicked = true; //we have clicked a country
        if (box) {
          if (box.toLowerCase() == "hippo") {
            things.push(new Thing(mouseX, mouseY, countries[i].owner, "hippo"))
          } else if (box.toLowerCase() == "croc") {
            things.push(new Thing(mouseX, mouseY, countries[i].owner, "croc"))
          } else if (box.toLowerCase() == "wall") { //if they entered wall
            countries[i].wall = true //build a wall
          } //clearly someone wants to invade
          else if (countries[i].wall) { //if there is a wall
            countries[i].wall = false //knock over the wall
          } else { //if there is no wall
            countries[i].owner = whichOwner(box); //change owners
          }
        }
      }
    }
  }
  if (!clicked) { //if we didn't click a contry
    var overColor = color(canvas.get(mouseX, mouseY)); //gets the color of the canvas under the mouse
    var oceanColor = color(175, 221, 223); //define the ocean color
    if ((overColor.levels[0] == oceanColor.levels[0]) && (overColor.levels[1] == oceanColor.levels[1])) { //if we clicked an ocean
      box = prompt("You have clicked the ocean, to make a boat, enter a team name", ""); //get an instruction
      clicked = true; //we have clicked the ocean
      if (box) {
        things.push(new Thing(mouseX, mouseY, whichOwner(box), "boat")); //change owners
      }
    }
  }
}