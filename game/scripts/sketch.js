var back; //this holds the background image
var countries; //this holds the countries (see from line 27)
var owners = []; //this holds the teams that are playing
var titleSize = 75;
/*var loc = { // these are used to scale to screen
  x: -20,
  y: -25,
  scle: 1
};*/

var backWidth = 2235; //width of the image
var backHeight = 1627; //height of the image

//<variabes for holding DOM elements>, used in setup
var nameInput
var StrtGmeBtn
var AddTeamBtn
var canvas
var infoP
  //<variabes for holding DOM elements>
var loaded = 0; // is the JSON loaded yet?

function preload() {
  owners.push(new Owner("Unowned", "white", "0")); //holds this for the JSON file, MUST HAPPEN BEFORE USER INPUT
}

function setup() {
  loadJSON("countries.json", JSONLoaded);
  loadImage('back.png', imgLoaded);
  //<scale canvas>
  /* if (backWidth / backHeight > windowWidth / windowHeight) { //if the limiting dimention is  Width
     loc.scle = windowWidth / backWidth; // use the width to determine the scale
   } else { //if the limiting dimention is height
     loc.scle = windowHeight / backHeight; // use the height to determine the scale
   }*/
  //</scale canvas>
  //<mess with the DOM stuff>
  nameInput = createInput("Enter team name") //create an input for the team names
  nameInput.parent('game'); //put it in it's place
  AddTeamBtn = createButton("Add Team") //create a button that just adds the team
  AddTeamBtn.mousePressed(newTeam); // if the button is pressed make a team with the team name entered
  AddTeamBtn.parent('game'); //put it in it's place
  StrtGmeBtn = createButton("Start Game") //create a button that will add a team and start the game
  StrtGmeBtn.mousePressed(strtGme) // if the button is pressed make a team with the team name entered and start the game
  StrtGmeBtn.parent('game'); //put it in it's place
  infoP = createP("") //make a paragraph to show to the user
  infoP.parent('game'); //put it in it's place
  canvas = createCanvas(backWidth, backHeight); // make a canvas the size of the image, 5 is needed because bugs
  canvas.parent('game'); //put it in it's place
  canvas.hide(); //hide the canvas, will be shown when game starts
  //</mess with the DOM stuff>
  //<housekeeping>
  angleMode(DEGREES); //make my head hurt less
  //</housekeeping>
}

function draw() {
  if (loaded >= 2) { //if both the JSON and the background are loaded
    //<add the countries>
    for (var i = 0; i < countries.length; i++) { //loop through the countries
      fill(owners[countries[i].owner].col)
      if (countries[i].wall) {//build the wall
        stroke("#ff9100");
        strokeWeight(17);
      } else {// or dont
        noStroke();
      }
      beginShape();
      for (var j = 0; j < countries[i].path.length; j++) {
        vertex(countries[i].path[j].x, countries[i].path[j].y);
      }
      endShape(CLOSE);
    }
    //<add the countries>
    image(back, 0, 0) //put a map up
    /*Striking this temp.
    for (i = 1; i < owners.length; i++) { // loop through the owners
      noStroke();
      textSize(titleSize); // make the text bigger
      fill(owners[i].col) //fill with the color of the team
      textAlign(RIGHT, BOTTOM) // mkae the text go where it belongs
      text(owners[i].name, width - 30, (i * titleSize) + 200) //whats your name man?
    }*/
  }
}
