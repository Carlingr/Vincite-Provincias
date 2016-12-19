function strtGme() { // start the game
  //<get rid of the input garbage>
  nameInput.remove()
  StrtGmeBtn.remove()
  AddTeamBtn.remove()
  infoP.remove()
    //</get rid of the input garbage>
  canvas.show() // show us the board
}

function newTeam() { // make a new team
  var colors = ["red", "orange", "yellow", "green", "pink", "purple"] // Introuduce ROY G BIV
    //no blue because blue is the same color used for rivers
  if (owners.length < colors.length + 1) { //if we have NOT run out of colors
    owners.push(new Owner(nameInput.value(), colors[owners.length - 1])) // add an owner with the name input
    infoP.html("New team created with the name <b><span style=\"color:" + owners[owners.length - 1].col + ";\">" + nameInput.value() + "</span></b><br>") //make a paragraph so we know what is going on
    nameInput.value("Enter team name") //reset the input
  } else { //if we HAVE run out of colors
    infoP.html("Error! Max Teams") // throw a fit
    strtGme() // get us outta here
  }
}