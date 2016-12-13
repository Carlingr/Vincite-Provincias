var back; //this holds the background image
var countries = []; //this holds the countries (see from line 27)
var owners = [] //this holds the teams that are playing
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
  //<variabes for holding DOM elements>

function preload() {
  back = loadImage('images/Bckgrnd.png')
    /*<load country images and create objects for countries>
    input is the following: (name(string), image path(string), X location(int), Y location (int))
    X,Y coordanates will be the center of the place the country name is displayed
    and will be used to determine if the country is clicked.
    I found the X,Y by using mouseX and mouseY, and fine tuning it from there.
    */
    //above line creates a country with the name "Aegyptus", where the image of the country can be found at "images/Aegyptus.png", at an X of 675 and a Y of 621
    //</load country images and create objects>
  owners[0] = new Owner("Unowned", "white") // creates an Owner that can be given to unowned countries
}

function setup() {
  //<scale canvas>
  if (backWidth / backHeight > windowWidth / windowHeight) { //if the limiting dimention is  Width
    loc.scle = windowWidth / backWidth; // use the width to determine the scale
  } else { //if the limiting dimention is height
    loc.scle = windowHeight / backHeight; // use the height to determine the scale
  }
  //</scale canvas>
  //<mess with the DOM stuff>
  nameInput = createInput("Enter team name") //create an input for the team names
  StrtGmeBtn = createButton("Add and Start") //create a button that will add a team and start the game
  StrtGmeBtn.mousePressed(lstTeam) // if the button is pressed make a team with the team name entered and start the game
  AddTeamBtn = createButton("Add Another") //create a button that just adds the team
  AddTeamBtn.mousePressed(newTeam); // if the button is pressed make a team with the team name entered
  canvas = createCanvas((backWidth * loc.scle) + loc.x, (backHeight * loc.scle) - loc.y); // make a canvas the size of the image
  canvas.hide() //hide the canvas, will be shown when game starts
    //</mess with the DOM stuff>
    //<housekeeping>
  titleSize = 20 // set the title size
  angleMode(DEGREES) //make my head hurt less
    //<end housekeeping>
}

function draw() {
  scale(loc.scle) // set the scale to the scale determined
  image(back, loc.x, loc.y) //put a map up
    //<add the countries>
  for (var i = 0; i < countries.length; i++) {
    tint(owners[countries[i].owner].col) //mkae the country the color of its owner
  }
  //<add the countries>
  //Loops are seperated so that countres do not cover other countries names
  //<add the names>
  fill("Black") //fill with black
  noStroke() //get rid of the stroke
  textSize(titleSize); //make the text size
  textAlign(CENTER, CENTER) //make the text centered
  for (i = 0; i < countries.length; i++) { // loop through the countries
  }
  //</add the names>
  for (i = 1; i < owners.length; i++) { // loop through the owners
    owners[i].printTitle(i * (titleSize + 6)) //put the owners in the corner
  }
}

function mousePressed() { //when the mouse is pressed
  for (var i = 0; i < countries.length; i++) { //go through the countries
    countries[i].invade() //if a country is clicked, invade it.
  }
}