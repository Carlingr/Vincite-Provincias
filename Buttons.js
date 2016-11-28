function lstTeam() {
  newTeam()
  strtGme()
}

function strtGme() {
  nameInput.hide()
  StrtGmeBtn.hide()
  AddTeamBtn.hide()
  canvas.show()
}

function newTeam() {
  var colors = ["red", "orange", "yellow", "green", "pink", "purple"]
  if (owners.length < colors.length + 1) {
    owners.push(new Owner(nameInput.value(), colors[owners.length - 1]))
  } else {
    createP("Error! Max Teams")
    strtGme()
  }
}