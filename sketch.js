var back;
var countries = [];
var owners = []
var loc = {
  x: 0,
  y: -25,
  scle: 1
};
var titleSize

var nameInput
var StrtGmeBtn
var AddTeamBtn
var canvas

function preload() {
  back = loadImage('images/bckgrnd.png')

  countries[0] = new Country("Aegyptus", "images/Aegyptus.png", 675, 621)
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

  owners[0] = new Owner("Unowned", "white")
}

function setup() {

  if (992 / 687 > windowWidth / windowHeight) {
    //limited by Width
    loc.scle = windowWidth / 992;
  } else {
    //limited by height
    loc.scle = windowHeight / 687;
  }

  nameInput = createInput("Enter team name")
  StrtGmeBtn = createButton("Start")
  AddTeamBtn = createButton("Add Another")
  createDiv("")
  createDiv("");
  AddTeamBtn.mousePressed(newTeam);
  StrtGmeBtn.mousePressed(lstTeam)
  canvas = createCanvas(992 * loc.scle, 687 * loc.scle);
  canvas.hide()
  scale(loc.scle)
  titleSize = 20
  angleMode(DEGREES)
}

function draw() {
  scale(loc.scle)
  noTint()
  image(back, loc.x, loc.y)

  for (var i = 0; i < countries.length; i++) {
    tint(owners[countries[i].owner].col)
    image(countries[i].img, loc.x, loc.y)
  }
  //Loops are seperated so that countres do not cover other countries names

  fill("Black")
  noStroke()
  textSize(titleSize);
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
    countries[i].invade()
  }
}