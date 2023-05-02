import { SVG } from "../lib/svg.jsx";
import * as React from 'react';
import { Leva, useControls } from 'leva';
import { createRoot } from "react-dom/client";
import { range } from "../lib/helpers.js";
const { sin, cos } = Math

function drawingControls() {
  return useControls({
    position: { x: 200, y: 200 },
    n: { value: 40, min: 1, max: 300, step: 1 },
    step: { value: 600, min: 0, max: 1000, step: 0.1 },
    delta: {
      value: { x: 0, y: 0 },
      step: 0.4,
    },
    wiggle: { value: 0, min: 0, max: 30, step: 0.1 },
    opacity: { value: 0, min: 0, max: 1, step: 0.001 },
    dt: {
      value: 1, min: 0.0001, step: 0.001, max: 6, onChange: (dt) => {
        setdt(dt)
      }
    }
  })
}

function Drawing() {
  const { n, step, delta, position, wiggle, opacity } = drawingControls({ dt, setdt })

  return (<>
    <Leva />
    <SVG>{
      range(n)
        .map(i =>
          <circle
            fill="black"
            fillOpacity={(n - i) / 100 * opacity}
            cx={position.x + delta.x * i + sin(t + i) * wiggle}
            cy={position.y + delta.y * i + cos(t + i) * wiggle}
            r={Math.sqrt(i * step)}
            key={i} />)
    }
    </SVG>
  </>
  );
}

const root = createRoot(document.getElementById('drawing')!);
root.render(<Drawing />)
