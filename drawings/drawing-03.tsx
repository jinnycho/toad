import { SVG } from "../lib/svg.jsx";
import React from 'react';
import { useControls } from 'leva';
import { range } from "../lib/helpers.js";

function drawingControls() {
  return useControls({
    delta: {
      value: { x: 3, y: 0 },
      step: 0.06,
    },
  })
}

export function Drawing() {

  const [delta, setDelta] = React.useState({ x: 0, y: 0 });
  // change delta according to mouse position 

  React.useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {

      // like this but based on the middle of the screen
      // setDelta({
      //   x: e.clientX / 100,
      //   y: e.clientY / 100,
      // });

      setDelta({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);


  const n =  58;
  const step = 945;
  const angle = 494;
  const diff = {x:28, y:28};
  // position should be the center of the screen
  const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

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
