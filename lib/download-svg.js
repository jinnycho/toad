const config = require('./config');
const { width, height, xmlns } = config;

export function downloadSVG() {
  function saveSvg(svgElOne, name) {
    const svgEl = svgElOne.cloneNode(true);
    console.log(svgEl);
    svgEl.setAttributeNS(null, 'width', width)
    svgEl.setAttributeNS(null, 'height', height)
    svgEl.width = width
    svgEl.height = height
    svgEl.setAttribute("xmlns", xmlns);
    svgEl.setAttribute("xmlns", xmlns);
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], { type: "image/svg+xml;charset=utf-8" });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  const svg = document.querySelector("svg.drawing");
  saveSvg(svg, 'drawing-000.svg')
}
