function strtGme() { //start the game
  //<make sure that there are at leas two teams>
  if (owners.length < 3) { //if there is less then two teams
    newTeam(); //add a team
    if (owners.length < 3) { //if there is still less then two teams
      newTeam(); //add another team
    }
  }
  //</make sure that there are at leas two teams>
  //<get rid of the input garbage>
  nameInput.remove()
  StrtGmeBtn.remove()
  AddTeamBtn.remove()
  infoP.remove()
    //</get rid of the input garbage>
  canvas.show() //show us the board
}

function newTeam() { //make a new team
  var colors = ["red", "orange", "green", "purple"] // Introuduce RO G IV
    //no blue because blue is the same color used for rivers
    //no yellow because it is too hard to see
  if (owners.length <= colors.length) { //if we have NOT run out of colors
    owners.push(new Owner(nameInput.value(), colors[owners.length - 1])) // add an owner with the name input
    infoP.html("New team created with the name <b><span style=\"color:" + owners[owners.length - 1].col + ";\">" + nameInput.value() + "</span></b><br>") //make a paragraph so we know what is going on
    nameInput.value("Enter team name") //reset the input
  } else { //if we HAVE run out of colors
    createP("Error! Max Teams") // throw a fit
    strtGme() // get us outta here
  }
}

function countriesLoaded(countJason) {
  countries = countJason.countries;
  for (var i = 0; i < countries.length; i++) {
    countries.invade = function() { // called when mousePressed
      if ((abs(mouseX - ((this.txtX + loc.x) * loc.scle)) < textWidth(this.name) / 2) && (abs(mouseY - ((this.txtY + loc.y) * loc.scle)) < titleSize)) {
        //if the mouse is over the title, easier then defining if the mouse is in the country, and works as well
        this.owner++; //cycle through the owners
        if (this.owner > owners.length - 1) { // restart if we have run out of owners
          this.owner = 0
        }
      }
    }
  }
  console.log(countries)
}