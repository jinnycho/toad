import React from 'react'
import { createRoot } from "react-dom/client";
import { Drawing as Drawing03 } from './drawings/drawing-03';

function App() {
  return (<>
    <Drawing03 />
  </>)
}


const root = createRoot(document.getElementById('root')!);
root.render(<App />)
