/* Holds Constructor functions
Country takes the name, image directory, xloc, and yloc
Owner takes the name and the color
Owners are the teams that are used
*/
function Country(name, img, txtX, txtY, imgX, imgY) {
  this.name = name
  this.img = loadImage(img) // load the image with the given filepath
  this.txtX = txtX
  this.txtY = txtY
  this.imgX = imgX
  this.imgY = imgY - 5 //for some reason an ofset of five is needed for it to be in the right place
  this.owner = 0 //owner 0 is unowned
  //eventually will load from file
}

function Owner(name, col) {
  this.name = name
  this.col = col
  this.printTitle = function(y) { // puts the title in the upper right corner, takes a y so that they will be listed.
    //stroke("black") // make a black edge. 
    textSize(titleSize + 15); // make the text bigger
    fill(this.col) //fill with the color of the team
    textAlign(RIGHT, BOTTOM) // mkae the text go where it belongs
    text(this.name, (width / loc.scle) - 15, y + (loc.scle * 5) + 10) //whats your name man?
  }
}