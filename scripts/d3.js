import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let svg;

const width = 800;
const height = 600;

async function prepareVis() {
  svg = d3.select("#d3")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
}

// async function drawVis() {
//   circle = svg
//     .append("circle")
//     .attr("r", 15)
//     .attr("fill", "black")
//     .attr("cx", 55)
//     .attr("cy", 25)
//     .on("click", playAnimation);
// }

async function runApp() {
  await prepareVis();
}

runApp();
