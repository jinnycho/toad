import * as context from "./toad/context.js"


function _transform(object, str) {
  let newTransform = (object.getAttributeNS(null, 'transform') || "") + " " + str;
  object.setAttributeNS(null, 'transform', newTransform);
  return object;
}

function addTransformFns(object) {
  object._transform = (str) => _transform(object, str)
  object.perspective = (p) => _transform(object, `perspective(${p})`);
  object.rotate = (a, { x: cx, y: cy }) => _transform(object, `rotate(${a}, ${cx}, ${cy})`);
  object.translate = ({ x, y }) => _transform(object, `translate(${x}, ${y})`);
  object.scale = (a) => _transform(object, `scale(${a}, ${a})`);
  object.scaleXY = ({ x, y }) => _transform(object, `scale(${x}, ${y})`);
  object.skewX = (a) => _transform(object, `skewX(${a})`);
  object.skewY = (a) => _transform(object, `skewY(${a})`);
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

{
  context.initialize('fill', 'transparent')
  context.initialize('stroke-width', 1)
  context.initialize('stroke', 'black')
  context.initialize('parent-node', svg)
}

function createSVGElement(tag, attributes = {}) {
  let el = document.createElementNS("http://www.w3.org/2000/svg", tag)
  for (const [attr, value] of Object.entries(attributes)) {
    el.setAttributeNS(null, attr, value);
  }
  el.setAttributeNS(null, 'fill', context.get('fill'))
  el.setAttributeNS(null, 'stroke-width', context.get('stroke-width'))
  el.setAttributeNS(null, 'stroke', context.get('stroke'))
  context.get('parent-node').appendChild(el)
  addTransformFns(el)
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

function group(callback) {
  var g = createSVGElement('g');
  context.setWithin('parent-node', g, callback);
  return g;
}

function stroke(color, callback) {
  context.setWithin('stroke', color, callback)
}

function strokeWidth(width, callback) {
  context.setWithin('stroke-width', width, callback)
}

function fill(color, callback) {
  context.setWithin('fill', color, callback)
}

export {
  createSVG,
  drawRectangle,
  drawCircle,
  drawEllipse,
  drawLine,
  group,
  stroke,
  strokeWidth,
  fill
};
