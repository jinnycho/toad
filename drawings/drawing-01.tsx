import { SVG } from "../lib/svg.jsx";
import React from 'react';
import { range } from "../lib/helpers.js";

/**
 * Making a chess board
 */
export function Drawing() {
  const n = 8;
  return (
    <SVG>{
      range(n)
        .map(i =>
          range(n).map(j => {
            const color = (i + j) % 2 === 0 ? "black" : "white";
            return <rect key={`${i}-${j}`}
            x={i * 40} y={j * 40} width={40} height={40} fill={color} />

            // draw an svg line
            return <line x1={i * 40} y1={j * 40} x2={i * 40 + 40} y2={j * 40 + 40} stroke={color} />
          })
        )
    }</SVG>
  )
}
