
/// Rest

window.ns = 'http://www.w3.org/2000/svg'

function addTransformFn(object) {
  const transformFn = (str) => {
    var g = document.createElementNS(window.ns, 'g')
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
  var svg = document.createElementNS(window.ns, 'svg')
  svg.setAttributeNS(null, 'width', '100%')
  svg.setAttributeNS(null, 'height', '100%')
  div.appendChild(svg)
  return svg
}

const svg = createSVG();

function drawRectangle({ width, height, x, y }, color = '#f06') {
  var rect = document.createElementNS(window.ns, 'rect')
  rect.setAttributeNS(null, 'width', width)
  rect.setAttributeNS(null, 'height', height)
  rect.setAttributeNS(null, 'x', x)
  rect.setAttributeNS(null, 'y', y)
  rect.setAttributeNS(null, 'fill', 'transparent')
  rect.setAttributeNS(null, 'stroke', color)
  rect.setAttributeNS(null, 'stroke-width', 1)
  svg.appendChild(rect)
  addTransformFn(rect)
  return rect
}

function drawCircle({ x, y, r }) {
  var circ = document.createElementNS(window.ns, 'circle')
  circ.setAttributeNS(null, 'cx', x)
  circ.setAttributeNS(null, 'cy', y)
  circ.setAttributeNS(null, 'r', r)
  circ.setAttributeNS(null, 'fill', 'transparent')
  circ.setAttributeNS(null, 'stroke', '#60f')
  circ.setAttributeNS(null, 'stroke-width', 1)
  svg.appendChild(circ)
  addTransformFn(circ)
  return circ
}

function drawEllipse({ x, y, rx, ry }) {
  var circ = document.createElementNS(window.ns, 'ellipse')
  circ.setAttributeNS(null, 'cx', x)
  circ.setAttributeNS(null, 'cy', y)
  circ.setAttributeNS(null, 'rx', rx)
  circ.setAttributeNS(null, 'ry', ry)
  circ.setAttributeNS(null, 'fill', 'transparent')
  circ.setAttributeNS(null, 'stroke', '#06f')
  circ.setAttributeNS(null, 'stroke-width', 1)
  svg.appendChild(circ)
  addTransformFn(circ)
  return circ
}

function drawLine({ from, to }) {
  var line = document.createElementNS(window.ns, 'line')
  line.setAttributeNS(null, 'x1', from.x)
  line.setAttributeNS(null, 'y1', from.y)
  line.setAttributeNS(null, 'x2', to.x)
  line.setAttributeNS(null, 'y2', to.y)
  line.setAttributeNS(null, 'stroke', '#06f')
  line.setAttributeNS(null, 'stroke-width', 1)
  svg.appendChild(line)
  addTransformFn(line)
  return line
}


export { drawRectangle, drawCircle, drawEllipse, drawLine };
