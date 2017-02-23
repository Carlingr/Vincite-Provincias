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
var infoP
  //<variabes for holding DOM elements>

function preload() {
  back = loadImage('images/Bckgrnd.png')
    /*<load country images and create objects for countries>
    input is the following: (name(string), image path(string), Text x location(int), text y location (int), image x location(int), image y location (int))
    txtX,txyY coordanates will be the center of the place the country name is displayed, and will be used to determine if the country is clicked.
    I found the txtX,txtY by using mouseX and mouseY, and fine tuning it from there.
    I found imgX,imgY by first cropping the image to the bottom, left of the country, then noting the image size.
    I then crop the country, and note the diffrence in size. this is the imgX,imgY
    */
  countries[0] = new Country("Aegyptus", "images/Aegyptus.png", 675, 621, 603, 561)
    //above line creates a country with the name "Aegyptus", where the image of the country can be found at "images/Aegyptus.png", locating the text at 675,621 and the image at 603,561
  countries[1] = new Country("Asia Minor", "images/Asia.png", 860, 464, 681, 288)
  countries[2] = new Country("Britannia", "images/Britn.png", 180, 194, 113, 111)
  countries[3] = new Country("Caledonia", "images/Caledonia.png", 133, 84, 90, 33)
  countries[4] = new Country("Corsica", "images/Corsica.png", 344, 392, 338, 381)
  countries[5] = new Country("Crete", "images/Crete.png", 592, 511, 574, 506)
  countries[6] = new Country("Cyprus", "images/Cyprus.png", 728, 512, 713, 508)
  countries[7] = new Country("Cyrenaica", "images/Cyrenaica.png", 488, 601, 296, 482)
  countries[8] = new Country("Dacia", "images/Dacia.png", 591, 320, 549, 262)
  countries[9] = new Country("Gallia", "images/Gallia.png", 242, 309, 127, 196)
  countries[10] = new Country("Germania", "images/Germania.png", 342, 299, 273, 159)
  countries[11] = new Country("Graecia", "images/Greece.png", 605, 403, 508, 376)
  countries[12] = new Country("Hibernia", "images/Hibernia.png", 81, 164, 38, 127)
  countries[13] = new Country("Hispania", "images/Hispania.png", 131, 434, 52, 380)
  countries[14] = new Country("Iberia", "images/Iberia.png", 95, 378, 56, 365)
  countries[15] = new Country("Italia", "images/Italia.png", 395, 374, 308, 302)
  countries[16] = new Country("Iudea", "images/Iudea.png", 770, 550, 754, 482)
  countries[17] = new Country("Macedonia", "images/Macedonia.png", 547, 369, 472, 333)
  countries[18] = new Country("Mauritania", "images/Mauritania.png", 158, 528, 59, 486)
  countries[19] = new Country("Pannonia", "images/Pannonia.png", 466, 307, 323, 260)
  countries[20] = new Country("Sardinia", "images/Sardinia.png", 346, 431, 331, 411)
  countries[21] = new Country("Sicilia", "images/Sicilia.png", 424, 474, 399, 463)
  countries[22] = new Country("Syria", "images/Syria.png", 657, 456, 615, 396)
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

function mousePressed() { //when the mouse is pressed
  for (var i = 0; i < countries.length; i++) { //go through the countries
    countries[i].invade() //if a country is clicked, invade it.
  }
}