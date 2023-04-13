import * as context from "./context.js"


function createTransform(object) {
  function _transform(tf, object, str) {
    let newTransform = (object.getAttributeNS(null, 'transform') || "") + " " + str;
    object.setAttributeNS(null, 'transform', newTransform);
    return tf;
  }

  const tf = {};
  tf.raw = (str) => _transform(tf, object, str)
  tf.perspective = (p) => _transform(tf, object, `perspective(${p})`);
  tf.rotate = (a, { x: cx, y: cy }) => _transform(tf, object, `rotate(${a}, ${cx}, ${cy})`);
  tf.translate = ({ x, y }) => _transform(tf, object, `translate(${x}, ${y})`);
  tf.scale = (a) => _transform(tf, object, `scale(${a}, ${a})`);
  tf.scaleXY = ({ x, y }) => _transform(tf, object, `scale(${x}, ${y})`);
  tf.skewX = (a) => _transform(tf, object, `skewX(${a})`);
  tf.skewY = (a) => _transform(tf, object, `skewY(${a})`);
  return tf;
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
  el._transform = createTransform(el)
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

function drawText({ x, y }, str) {
  const text = createSVGElement('text', { x, y });
  text.textContent = str;
  return text;
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

function setDefaultStrokeWidth(value) {
  context.initialize('stroke-width', value);
}

function setDefaultFill(value) {
  context.initialize('fill', value);
}

function setDefaultStroke(color) {
  context.initialize('stroke', color)
}

export {
  createSVG,
  drawRectangle,
  drawCircle,
  drawEllipse,
  drawLine,
  drawText,
  group,
  stroke,
  strokeWidth,
  setDefaultStrokeWidth,
  setDefaultFill,
  setDefaultStroke,
  fill
};
