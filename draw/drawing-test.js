import * as toad from "../lib/toad.js";

function test() {
  toad.strokeWidth(2, () => {

    toad.drawLine({ from: { x: 300, y: 100 }, to: { x: 300, y: 300 } })

    toad.strokeWidth(40, () => {
      toad.drawLine({ from: { x: 400, y: 100 }, to: { x: 400, y: 300 } })
    })

    toad.group(() => {
      toad.drawLine({ from: { x: 500, y: 100 }, to: { x: 500, y: 300 } })
      toad.stroke('red', () => {
        toad.drawLine({ from: { x: 600, y: 100 }, to: { x: 600, y: 300 } })
      })
    }).skewX(-20).translate({ x: 50, y: 0 })

    toad.drawCircle({ x: 100, y: 100, r: 40 })
      .rotate(-70, { x: 300, y: 200 })
      .skewX(30)
      .skewY(30)
      .rotate(20, { x: 300, y: 200 })
  })

}

window.test = test;
