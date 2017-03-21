var back; //this holds the background image
var countries; //this holds the countries (see from line 27)
var owners = []; //this holds the teams that are playing
var loc = { // these are used to scale to screen
  x: -20,
  y: -25,
  scle: 1
};
var titleSize //how big the text will be

var backWidth = 992;
var backHeight = 687;

//<variabes for holding DOM elements>, used in setup
var nameInput
var StrtGmeBtn
var AddTeamBtn
var canvas
var infoP
  //<variabes for holding DOM elements>

function preload() {
  back = loadImage('images/Bckgrnd.png');
  /*<load country images and create objects for countries>
  input is the following: (name(string), image path(string), Text x location(int), text y location (int), image x location(int), image y location (int))
  txtX,txyY coordanates will be the center of the place the country name is displayed, and will be used to determine if the country is clicked.
  I found the txtX,txtY by using mouseX and mouseY, and fine tuning it from there.
  I found imgX,imgY by first cropping the image to the bottom, left of the country, then noting the image size.
  I then crop the country, and note the diffrence in size. this is the imgX,imgY
  */
    owners[0] = new Owner("Unowned", "white") // creates an Owner that can be given to unowned countries
}

function setup() {
  loadJSON("countries.json", countriesLoaded);
  //<scale canvas>
  if (backWidth / backHeight > windowWidth / windowHeight) { //if the limiting dimention is  Width
    loc.scle = windowWidth / backWidth; // use the width to determine the scale
  } else { //if the limiting dimention is height
    loc.scle = windowHeight / backHeight; // use the height to determine the scale
  }
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
  canvas = createCanvas((backWidth * loc.scle) + loc.x, (backHeight * loc.scle) + loc.y + 5); // make a canvas the size of the image, 5 is needed because bugs
  canvas.hide() //hide the canvas, will be shown when game starts
  canvas.parent('game'); //put it in it's place
  //</mess with the DOM stuff>
  //<housekeeping>
  titleSize = 20 // set the title size
  angleMode(DEGREES); //make my head hurt less
  //</housekeeping>
}

function draw() {
  if (countries) {
    scale(loc.scle) // set the scale to the scale determined
    noTint() //make sure the back is not tinted
    image(back, loc.x, loc.y) //put a map up
      //<add the countries>
    for (var i = 0; i < countries.length; i++) {
      tint(owners[countries[i].owner].col) //mkae the country the color of its owner
      image(countries[i].img, countries[i].imgX + loc.x, countries[i].imgY + loc.x) //add the country
    }
    //<add the countries>
    //Loops are seperated so that countres do not cover other countries names
    //<add the names>
    fill("Black") //fill with black
    noStroke() //get rid of the stroke
    textSize(titleSize); //make the text size
    textAlign(CENTER, CENTER) //make the text centered
    for (i = 0; i < countries.length; i++) { // loop through the countries
      text(countries[i].name, countries[i].txtX + loc.x, countries[i].txtY + loc.y) //put the name on top of the country
    }
    //</add the names>
    for (i = 1; i < owners.length; i++) { // loop through the owners
      owners[i].printTitle(i * (titleSize + 15)) //put the owners in the corner
    }
  }
}