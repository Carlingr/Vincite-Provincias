function AddPlayers() {
  var nameInput;
  var StrtGmeBtn;
  var AddTeamBtn;
  var infoP;
  this.setup = function() {
    //<mess with the DOM stuff>
    nameInput = createInput("Enter team name"); //create an input for the team names
    nameInput.parent('game'); //put it in it's place
    AddTeamBtn = createButton("Add Team"); //create a button that just adds the team
    AddTeamBtn.mousePressed(newTeam); // if the button is pressed make a team with the team name entered
    AddTeamBtn.parent('game'); //put it in it's place
    StrtGmeBtn = createButton("Start Game"); //create a button that will add a team and start the game
    StrtGmeBtn.mousePressed(strtGme); // if the button is pressed make a team with the team name entered and start the game
    StrtGmeBtn.parent('game'); //put it in it's place
    infoP = createP(""); //make a paragraph to show to the user
    infoP.parent('game'); //put it in it's place
    //</mess with the DOM stuff>
  }
}
