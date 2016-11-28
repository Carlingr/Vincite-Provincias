function Country(name, img, x, y) {
  this.name = name
  this.img = loadImage(img)
  this.x = x
  this.y = y
  this.owner = 0
    //this.selected = false
  this.invade = function() {
    if ((abs(mouseX - ((this.x + loc.x) * loc.scle)) < textWidth(this.name) / 2) && (abs(mouseY - ((this.y + loc.y) * loc.scle)) < titleSize)) {
      this.owner++;
      if (this.owner > owners.length - 1) {
        this.owner = 0
      }
    }
  }
}

function Owner(name, col) {
  this.name = name
  this.col = col
  this.printTitle = function(y) {
    stroke("black")
    textSize(titleSize + 5);
    fill(this.col)
    textAlign(RIGHT, BOTTOM)
    text(this.name, width * (.99 / loc.scle), y + (loc.scle * 5))
  }
}