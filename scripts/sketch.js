var mgr;
var canvas;
var owners = [];

var backWidth = 2235; //width of the image
var backHeight = 1627; //height of the image

function preload() {
  owners.push(new Owner("Unowned", "white", "0")); //holds this for the JSON file, MUST HAPPEN BEFORE USER INPUT
}

function setup() {
loadJSON("https://carlingr.github.io/Vincite_Provincias/game/countries.json", JSONLoaded);
loadSVG('https://carlingr.github.io/Vincite_Provincias/game/img/ship.svg', bckLoaded);
  canvas = createCanvas(backWidth, backHeight, SVG);
  mgr = new SceneManager();

  // Preload scenes. Preloading is normally optional
  // ... but needed if showNextScene() is used.
  mgr.addScene(AddPlayers);

  mgr.showNextScene();
}

function draw() {
  mgr.draw();
}

function mousePressed() {
  mgr.handleEvent("mousePressed");
}
