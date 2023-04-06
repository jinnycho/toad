import * as toad from "../lib/toad.js";

// Starting out by drawing a circle

function main() {
  toad.drawCircle({ x: 100, y: 100, r: 40 })._transform('rotate(-10 50 100)');
  toad.drawCircle({ x: 100, y: 100, r: 40 })._transform('rotate(-10 300 300)')
  toad.drawCircle({ x: 100, y: 100, r: 40 }).translate(36, 34)
}

window.main = main
