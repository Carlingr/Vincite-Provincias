/* Holds Constructor functions
Country takes the name, image directory, xloc, and yloc
Owner takes the name and the color
Owners are the teams that are used
*/
function Country(name, img, x, y) {
  this.name = name
  this.img = loadImage(img) // load the image with the given filepath
  this.x = x
  this.y = y
  this.owner = 0 //owner 0 is unowned
    //eventually will load from file
  this.invade = function() { // called when mousePressed
    if ((abs(mouseX - ((this.x + loc.x) * loc.scle)) < textWidth(this.name) / 2) && (abs(mouseY - ((this.y + loc.y) * loc.scle)) < titleSize)) {
      //if the mouse is over the title, easier then defining if the mouse is in the country, and works as well
      this.owner++; //cycle through the owners
      if (this.owner > owners.length - 1) { // restart if we have run out of owners
        this.owner = 0
      }
    }
  }
}

function Owner(name, col) {
  this.name = name
  this.col = col
  this.printTitle = function(y) { // puts the title in the upper right corner, takes a y so that they will be listed.
    stroke("black") // make a black edge. 
    textSize(titleSize + 5); // make the text bigger
    fill(this.col) //fill with the color of the team
    textAlign(RIGHT, BOTTOM) // mkae the text go where it belongs
    text(this.name, backWidth * loc.scle, y + (loc.scle * 5)) //whats your name man?
    console.log(width)
    console.log(loc.scle)
  }
}
