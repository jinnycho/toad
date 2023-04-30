import * as toad from "../lib/toad.js";
import { noise } from "../lib/noise.js";
import { Pane } from 'tweakpane';


const PARAMS = {
  circles: 10,
  sep: 10,
  dx: 0,
  dy: 0,
};

const pane = new Pane();

pane.addInput(
  PARAMS,
  'circles',
  { min: 0, max: 40, step: 1 }
);

pane.addInput(
  PARAMS,
  'sep',
  { min: 0, max: 100, step: 0.1 }
);

pane.addInput(
  PARAMS,
  'dx',
  { min: -10, max: 10, step: 0.1 }
);

pane.addInput(
  PARAMS,
  'dy',
  { min: -10, max: 10, step: 0.1 }
);

pane.on('change', () => {
  toad.clear();
  main();
})


function main() {
  const x = 200;
  const y = 200;

  for (let i = 0; i < PARAMS.circles; i++) {
    toad.drawCircle({ x: x + i * PARAMS.dx, y: y + i * PARAMS.dy, r: 5 + Math.sqrt(i) * PARAMS.sep })
  }
}

window.main = main










// function traceNoise(point, x, y, threshold, iterations) {
//   if (iterations <= 0) {
//     return
//   }
//   let dx, dy;
//   for (let a = 0; a < 2 * Math.PI; a += 0.01) {
//     dx = Math.cos(a)
//     dy = Math.sin(a)
//     const value = noise(x + dx, y + dy);
//     console.log(Number((value).toFixed(2)))
//     if (Number((value).toFixed(1)) === threshold) {
//       x = x + dx;
//       y = y + dy;
//       point(x, y);
//       traceNoise(point, x, y, threshold, iterations - 1)
//       break;
//     }
//   }
// }

  // toad.drawCircle({ x, y, r: 100 });
  // toad.drawCircle({ x, y, r: 120 });
  // toad.drawCircle({ x, y, r: 120 });
  // toad.drawCircle({ x, y, r: 130 });


  // toad.drawPath({ x, y }, (point) => {
  // traceNoise(point, x, y, 0.52, 10)
  // });
