/* Holds Constructor functions
Owner takes the name and the color
Owners are the teams that are used
*/

function Owner(name, col, points) {
  this.name = name
  this.col = col
  this.points = points
}

function Thing(x, y, owner, type) {
  this.x = x
  this.y = y
  this.owner = owner
  this.type = type
}

// class Button{
//   constructor(label, x1, y1, x2, y2){}
// }
