import React from 'react'

export function SVG({ children }) {
  console.log(arguments)
  return <svg className='http://www.w3.org/2000/svg' width='7in' height='5in'>{children}</svg>
}
