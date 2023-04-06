
function createSVGElement(tag) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag)
}

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
  var svg = createSVGElement('svg')
  svg.setAttributeNS(null, 'width', '100%')
  svg.setAttributeNS(null, 'height', '100%')
  div.appendChild(svg)
  return svg
}

const svg = createSVG();

function drawRectangle({ width, height, x, y }, color = '#f06') {
  var rect = createSVGElement('rect')
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
  var circ = createSVGElement('circle')
  circ.setAttributeNS(null, 'cx', x)
  circ.setAttributeNS(null, 'cy', y)
  circ.setAttributeNS(null, 'r', r)
  debugger;
  circ.setAttributeNS(null, 'fill', 'transparent')
  circ.setAttributeNS(null, 'stroke', '#60f')
  circ.setAttributeNS(null, 'stroke-width', 1)
  svg.appendChild(circ)
  addTransformFn(circ)
  return circ
}

function drawEllipse({ x, y, rx, ry }) {
  var circ = createSVGElement('ellipse')
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
  var line = createSVGElement('line')
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
