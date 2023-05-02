import { SVG } from "../lib/svg.jsx";
import * as React from 'react';
import { createRoot } from "react-dom/client";
import { range } from "../lib/helpers.js";

/**
 * Making a chess board
 */
// function main() {
//   const squareWidth = 40
//   const gridSize = 8

//   group(() => {
//     // toad.drawRectangle({width: squareWidth * gridSize, height: squareWidth * gridSize, x: 30, y: 30});
//     for (let i = 0; i < gridSize; i++) {
//       for (let j = 0; j < gridSize; j++) {
//         if ((i + j) % 2 !== 0) {
//           toad.fill("black", () => {
//             toad.drawRectangle({ width: squareWidth, height: squareWidth, x: 30 + (i * squareWidth), y: 30 + (j * squareWidth) });
//           })
//         }
//       }
//     }
//   })._transform()
// }

function Drawing() {
  const n = 8;
  return (
    <SVG>{
      range(n)
        .map(i =>
          range(n).map(j => {
            const color = (i + j) % 2 === 0 ? "black" : "white";
            return <rect x={i * 40} y={j * 40} width={40} height={40} fill={color} />
          })
        )
    }</SVG>
  )
}

const root = createRoot(document.getElementById('drawing')!);
root.render(<Drawing />)
