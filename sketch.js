var back; //this holds the background image
var countries = []; //this holds the countries (see from line 27)
var owners = [] //this holds the teams that are playing
var loc = {// these are used to scale to screen
  x: 0,
  y: -25,
  scle: 1
};
var titleSize //how big the text will be

//<variabes for holding DOM elements>, used in setup
var nameInput
var StrtGmeBtn
var AddTeamBtn
var canvas
//<variabes for holding DOM elements>

function preload() {
  back = loadImage('images/bckgrnd.png')
  /*<load country images and create objects for countries>
  input is the following: (name(string), image path(string), X location(int), Y location (int))
  X,Y coordanates will be the center of the place the country name is displayed
  and will be used to determine if the country is clicked.
  I found the X,Y by using mouseX and mouseY, and fine tuning it from there.
  */
  countries[0] = new Country("Aegyptus", "images/Aegyptus.png", 675, 621)
  //above line creates a country with the name "Aegyptus", where the image of the country can be found at "images/Aegyptus.png", at an X of 675 and a Y of 621
  countries[1] = new Country("Britannia", "images/britn.png", 180, 194)
  countries[2] = new Country("Cyprus", "images/Cyprus.png", 728, 514)
  countries[3] = new Country("Italia", "images/Italia.png", 395, 374)
  countries[4] = new Country("Sicilia", "images/Sicilia.png", 424, 474)
  countries[5] = new Country("Cyrenaica", "images/Cyrenaica.png", 488, 601)
  countries[6] = new Country("Asia Minor", "images/Asia.png", 860, 464)
  countries[7] = new Country("Caledonia", "images/Caledonia.png", 133, 84)
  countries[8] = new Country("Germania", "images/Germania.png", 342, 299)
  countries[9] = new Country("Graecia", "images/Greece.png", 605, 403)
  countries[10] = new Country("Hispania", "images/Hispania.png", 131, 434)
  countries[11] = new Country("Iberia", "images/Iberia.png", 95, 378)
  countries[12] = new Country("Gallia", "images/Gallia.png", 242, 309)
  countries[13] = new Country("Syria", "images/Syria.png", 657, 456)
  countries[14] = new Country("Crete", "images/Crete.png", 592, 511)
  countries[15] = new Country("Iudea", "images/Iudea.png", 770, 533)
  countries[16] = new Country("Hibernia", "images/Hibernia.png", 81, 164)
  countries[17] = new Country("Sardinia", "images/Sardinia.png", 346, 431)
  countries[18] = new Country("Corsica", "images/Corsica.png", 344, 392)
  countries[19] = new Country("Mauritania", "images/Mauritania.png", 158, 528)
  countries[20] = new Country("Macedonia", "images/Macedonia.png", 547, 369)
  countries[21] = new Country("Dacia", "images/Dacia.png", 591, 320)
  countries[22] = new Country("Pannonia", "images/Pannonia.png", 466, 307)
  //</load country images and create objects>
  owners[0] = new Owner("Unowned", "white") // creates an Owner that can be given to unowned countries
}

function setup() {
  var backWidth = 992;
  var backHeight = 687;
  //<scale canvas>
  if (backWidth / backHeight > windowWidth / windowHeight) { //if the limiting dimention is  Width
    loc.scle = windowWidth / backWidth; // use the width to determine the scale
  } else {//if the limiting dimention is height
    loc.scle = windowHeight / backHeight;// use the height to determine the scale
  }
  //</scale canvas>
  //<mess with the DOM stuff>
  nameInput = createInput("Enter team name") //create an input for the team names
  StrtGmeBtn = createButton("Add and Start") //create a button that will add a team and start the game
  AddTeamBtn = createButton("Add Another") //create a button that just adds the team
  AddTeamBtn.mousePressed(newTeam);// if the button is pressed make a team with the team name entered
  StrtGmeBtn.mousePressed(lstTeam)// if the button is pressed make a team with the team name entered and start the game
  canvas = createCanvas(backWidth * loc.scle, backHeight * loc.scle);// make a canvas the size of the image
  canvas.hide() //hide the canvas, will be shown when game starts
  //</mess with the DOM stuff>
  //<housekeeping>
  scale(loc.scle)// set the scale to the scale determined
  titleSize = 20 // set the title size
  angleMode(DEGREES) //make my head hurt less
  //<end housekeeping>
}

function draw() {
  image(back, loc.x, loc.y)//put a map up

  for (var i = 0; i < countries.length; i++) {
    tint(owners[countries[i].owner].col)//mkae the country the name of the color
    image(countries[i].img, loc.x, loc.y)
  }
  //Loops are seperated so that countres do not cover other countries names
  fill("Black")// make it black
  noStroke()//get rid of the stroke
  textSize(titleSize);//make the text size
  textAlign(CENTER, CENTER)
  for (i = 0; i < countries.length; i++) {
    text(countries[i].name, countries[i].x + loc.x, countries[i].y + loc.y) //put the name on top of the country
  }
  for (i = 1; i < owners.length; i++) {
    owners[i].printTitle(i * (titleSize + 6))
  }
}

function mousePressed() {
  for (var i = 0; i < countries.length; i++) {
    countries[i].invade()//if a country is clicked, invade it.
  }
}
