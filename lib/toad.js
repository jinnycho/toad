

function addTransformFn(object) {
  const transformFn = (str) => {
    var g = createSVGElement('g')
    g.setAttributeNS(null, 'transform', str)
    let parent = object.parentNode;
    object.remove();
    parent.appendChild(g);
    g.appendChild(object);
  }
  object._transform = transformFn
}

function createSVG() {
  var div = document.getElementById('drawing')
  var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
  svg.setAttributeNS(null, 'width', '7in')
  svg.setAttributeNS(null, 'height', '5in')
  div.appendChild(svg)
  return svg
}

const svg = createSVG()

function createSVGElement(tag, attributes = {}) {
  let el = document.createElementNS("http://www.w3.org/2000/svg", tag)
  for (const [attr, value] of Object.entries(attributes)) {
    el.setAttributeNS(null, attr, value);
  }
  el.setAttributeNS(null, 'fill', 'transparent')
  el.setAttributeNS(null, 'stroke-width', 1)
  el.setAttributeNS(null, 'stroke', '#0af')
  svg.appendChild(el)
  addTransformFn(el)
  return el
}

function drawRectangle({ width, height, x, y }) {
  return createSVGElement('rect', { width, height, x, y })
}

function drawCircle({ x, y, r }) {
  return createSVGElement('circle', { cx: x, cy: y, r })
}

function drawEllipse({ x, y, rx, ry }) {
  return createSVGElement('ellipse', { x, y, rx, ry })
}

function drawLine({ from: { x: x1, y: y1 }, to: { x: x2, y: y2 } }) {
  return createSVGElement('line', { x1, y1, x2, y2 })
}

export { createSVG, drawRectangle, drawCircle, drawEllipse, drawLine };
