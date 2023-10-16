import { SVG } from "../lib/svg.jsx";
import React from 'react';
import { useControls } from 'leva';
import { range } from "../lib/helpers.js";

function drawingControls() {
  return useControls({
    angle: { value: 200, min: 0, max: 600, step: 0.1 },
    step: { value: 1, min: 0, max: 10 },
    stepNumber: { value: 5, min: 1, max: 50, step: 1 },
    travelOffset: { value: { x: -200, y: -200 }, step: 6}, 
    rotationOffset: { value: { x: 0, y: 0 }, max:200, step: 1},
    translationOffset: { value: { x: 0, y: 0 }, max: 200, step: 0.3},
    pinNumber: { value: 1, min: 1, max: 50, step: 1 },
    pinAngleDiff: { value: 30, min: 0, max: 100, step: 0.01 },
  })
}

export function Drawing() {

  const { stepNumber, pinAngleDiff, pinNumber, angle, step, travelOffset, rotationOffset, translationOffset } = drawingControls()

  return (<>
    <SVG>
      {
        // daw a line at the angle
        range(pinNumber + 1).map((pn) => {
          return range(stepNumber).map((i) => {
            const x1 = i - travelOffset.x - rotationOffset.x * i
            const y1 = 0 - travelOffset.y - rotationOffset.y * i
            const x2 = i * translationOffset.x - travelOffset.x - rotationOffset.x * i
            const y2 = i * translationOffset.y - travelOffset.y - rotationOffset.y * i

            const transform = `rotate(${pn * pinAngleDiff + angle + i * step }, ${i - travelOffset.x }, ${i - travelOffset.y })`
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="0.5" transform={transform} />
          })
        })


      }
    </SVG>
  </>
  );
}
