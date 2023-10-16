import { SVG } from "../lib/svg.jsx";
import React from 'react';
import { useControls } from 'leva';
import { range } from "../lib/helpers.js";

function drawingControls() {
  return useControls({
    position: { x: 200, y: 200 },
    diff: { x: 10, y: 10 },
    n: { value: 40, min: 1, max: 300, step: 1 },
    step: { value: 600, min: 0, max: 1800, step: 0.1 },
    delta: {
      value: { x: 3, y: 0 },
      step: 0.06,
    },
    angle: { value: 200, min: 0, max: 600 }
  })
}

export function Drawing() {

  const { n, step, delta, position, diff, angle } = drawingControls()

  return (<>
    <SVG>
      {
        range(n)
          .map(i =>
            <rect
              fill="transparent"
              stroke="black"
              strokeWidth="1"
              transform={`rotate(${angle} ${position.x} ${position.y})`}
              x={position.x - delta.x * (i)}
              y={position.y - delta.y * (i)}
              width={Math.sqrt((i) * step)}
              height={Math.sqrt((i) * step)}
              key={i} />)
      }
      {
        range(n)
          .map(i =>
            <rect
              fill="transparent"
              stroke="black"
              strokeWidth="1"
              transform={`rotate(${angle} ${position.x} ${position.y})`}
              x={position.x - delta.x * (i + n)}
              y={position.y - delta.y * (i + n)}
              width={Math.sqrt((n - i) * step)}
              height={Math.sqrt((n - i) * step)}
              key={i} />)
      }
      {
        range(n)
          .map(i =>
            <rect
              fill="transparent"
              stroke="black"
              strokeWidth="1"
              x={position.x + diff.x + delta.x * (i)}
              y={position.y + diff.y + delta.y * (i)}
              width={Math.sqrt((i) * step)}
              height={Math.sqrt((i) * step)}
              key={i} />)
      }
      {
        range(n)
          .map(i =>
            <rect
              fill="transparent"
              stroke="black"
              strokeWidth="1"
              x={position.x + diff.x + delta.x * (i + n)}
              y={position.y + diff.y + delta.y * (i + n)}
              width={Math.sqrt((n - i) * step)}
              height={Math.sqrt((n - i) * step)}
              key={i} />)
      }
    </SVG>
  </>
  );
}
