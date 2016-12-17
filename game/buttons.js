function lstTeam() { // make the last team
  newTeam() // make a new team
  strtGme() // start the game
}

function strtGme() { // start the game
  //<get rid of the input garbage>
  nameInput.remove()
  StrtGmeBtn.remove()
  AddTeamBtn.remove()
    //</get rid of the input garbage>
  canvas.show() // show us the board
}

function newTeam() { // make a new team
  var colors = ["red", "orange", "yellow", "green", "pink", "purple"] // Introuduce ROY G BIV
    //Blue is the same color used for rivers
  if (owners.length < colors.length + 1) { //if we have NOT run out of colors
    owners.push(new Owner(nameInput.value(), colors[owners.length - 1])) // add an owner with the name input
    createP("New team created with the name" + nameInput.value()) //make a paragraph so we know what is going on
  } else { //if we HAVE run out of colors
    createP("Error! Max Teams") // throw a fit
    strtGme() // get us outta here
  }
}