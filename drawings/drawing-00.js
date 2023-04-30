import * as toad from "../lib/toad.js";

// Starting out by drawing a circle

function main() {
  toad.drawCircle({ x: 100, y: 100, r: 40 })//._transform.rotate(-10, { x: 50, y: 100 });
  toad.drawCircle({ x: 100, y: 100, r: 40 })._transform.rotate(-10, { x: 300, y: 300 });
  toad.drawCircle({ x: 100, y: 100, r: 40 })._transform.translate({ x: 36, y: 34 });
}

window.main = main
