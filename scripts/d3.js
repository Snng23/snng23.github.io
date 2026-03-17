import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const width = 800;
const height = 600;

const maxCircles = 10;  // Maximum number of circles allowed
let circles = []; // array of circles on the canvas, in form of { id, x, y }
let nextId = 1; //Id for counting the number of circles

let svg;


async function prepareVis() {
  svg = d3
    .select("#d3")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .on("click", onCanvasClick);
}


//Add circle at mouse coordinate to list of circles:
async function onCanvasClick(event) {
  // Get mouse coordinate:
  const [x, y] = d3.pointer(event, svg.node());

  // Add a new circle to list.
  // If list exceeds 10 circles, delete the oldest one
  circles = [...circles, { id: nextId++, x, y }].slice(-maxCircles);

  await drawVis();
}


//Draw all circles in the list of circles
async function drawVis() {
  svg
    .selectAll("circle")
    .data(circles, (d) => d.id)
    .join("circle")
    .attr("r", 15) // All circles will have radius of 15
    .attr("fill", "#FF0000") // All circles will be in red
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y);
}


async function runApp() {
  await prepareVis();
  await drawVis();
}

runApp();
