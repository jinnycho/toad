import { SVG } from "../lib/svg.jsx";
import React from 'react';
import { useControls } from 'leva';
import { range } from "../lib/helpers.js";

function drawingControls() {
  return useControls({
    randomness: { value: 1, min: 0, max: 150, step: 0.1 },
    number_of_points: { value: 100, min: 0, max: 2000, step: 1 },
    amplitude: { value: 100, min: 0, max: 2000, step: 1 },
    period: { value: 6, min: 0, max: 100, step: 0.1 },
  })
}

export function Drawing() {
  // points for a sqliqly line
  const { randomness, number_of_points, amplitude, period } = drawingControls()
  const width = 680;
  const item_width = width / number_of_points;

  const points = range(number_of_points).map((i) => {
    const x = i * item_width
    // const y = Math.sin(i / number_of_points * (2 * Math.PI) )  * amplitude + Math.random() * randomness
    const y = Math.sin(i / number_of_points * (2 * Math.PI) * period) * amplitude + Math.random() * randomness
    return [x, y]
  })
  // move down
  const transform = `translate(0, 200)`
  return (
    <SVG>
      <path transform={transform} d={`M${points.map(p => p.join(',')).join('L')}`} stroke="black" fill="none" />
    </SVG>
  )
}
