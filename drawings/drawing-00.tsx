import { SVG } from "../lib/svg.jsx";
import * as React from 'react';
import { createRoot } from "react-dom/client";

function Drawing() {
  return (
    <SVG>
      <circle cx="100" cy="100" r="40" stroke="black" stroke-width="3" fill="cyan" fillOpacity={0.2} />
      <circle cx="80" cy="120" r="40" stroke="black" stroke-width="3" fill="magenta" fillOpacity={0.2} />
      <circle cx="120" cy="80" r="40" stroke="black" stroke-width="3" fill="yellow" fillOpacity={0.2} />
    </SVG>
  )
}

const root = createRoot(document.getElementById('drawing')!);
root.render(<Drawing />)
