var back; //this holds the background image
var countries; //this holds the countries (see from line 27)
var titleSize = 75;
/*var loc = { // these are used to scale to screen
  x: -20,
  y: -25,
  scle: 1
};*/


//<variabes for holding DOM elements>, used in setup

//<variabes for holding DOM elements>
var things = [];
var shipimg; //ship svgsc
var loaded = 0; // is the JSON loaded yet?



function setup() {

  //loadImage('https://carlingr.github.io/Vincite_Provincias/game/img/ship.svg', shipLoaded);


  //<housekeeping>
  angleMode(DEGREES); //make my head hurt less
  //</housekeeping>
  // while (loaded < 2) {console.log(loaded)} //wait for all the things to load
  console.log("setuped");
}

function draw() {
  //<add the countries>
  for (var i = 0; i < countries.length; i++) { //loop through the countries
    fill(owners[countries[i].owner].col);
    if (countries[i].wall) { //build the wall
      stroke("#AA6600");
      strokeWeight(17);
    } else { // or dont
      noStroke();
    }
    beginShape();
    for (var j = 0; j < countries[i].path.length; j++) {
      vertex(countries[i].path[j].x, countries[i].path[j].y);
    }
    endShape(CLOSE);
  }
  //</add the countries>
  noTint();
  image(svg, back, 0, 0); //put a map up
  for (i = 1; i < owners.length; i++) { // loop through the owners
    noStroke();
    textSize(titleSize); // make the text bigger
    fill(owners[i].col); //fill with the color of the team
    textAlign(RIGHT, BOTTOM); // mkae the text go where it belongs
    text(owners[i].name, width - 30, (i * titleSize) + 200); //whats your name man?
  }
  for (i = 0; i < things.length; i++) { // loop through the things that go over the map
    drawThing(things[i].x, things[i].y, things[i].owner, things[i].type); //draw each thing
  }
}

function drawThing(x, y, owner, type) {
  //takes the x,y coordinate, who owns it (only used for ships rn,
  //but capibility is good), and what to draw
  noStroke(); //looks better when the shapes have no edges
  switch (type) {
    case "croc": //should we draw a croc?
      fill("green"); //crocs are green
      ellipse(x, y, 20, 40); //oval
      break;
    case "hippo": //how about a hippo
      fill(100); //grey
      ellipse(x, y, 20); //circle
      break;
    case "boat": //it's a boat
      fill(owners[owner].col); //fill with the owner, since it won't
      //be associated with a country
      triangle(x, y + 20, x + 10, y - 20, x - 10, y - 20); //makes a triangle
  }
}

function whichOwner(input) {
  //takes the name of the country typed and turns it into an index number.
  for (var j = 0; j < owners.length; j++) { //go through the owners
    if (owners[j].name.toLowerCase() == input.toLowerCase()) {
      //is it this one?
      return (j); //found it
    }
  }
  alert("The country could not be found");
  return (0); // no dice, ergo unowned
}
