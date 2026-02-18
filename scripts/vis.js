const svgNS = "http://www.w3.org/2000/svg";

//Draw bar function:
function drawBar(svg, x, y, w, h) {
    //BAR:
    let rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);
    rect.setAttribute("fill", "navy");
    svg.appendChild(rect);


    //TEXT:
    let text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", x + w + 50);
    text.setAttribute("y", y + 25);
    text.setAttribute("fill", "black");
    text.textContent = String(w/100) + " Hours";
    svg.appendChild(text);
}

let svg1 = document.querySelector(".svg1");
drawBar(svg1, 100, 75, 600, 50);
drawBar(svg1, 100, 175, 400, 50);
drawBar(svg1, 100, 275, 450, 50);
drawBar(svg1, 100, 375, 550, 50);
drawBar(svg1, 100, 475, 500, 50);
drawBar(svg1, 100, 575, 800, 50);
drawBar(svg1, 100, 675, 900, 50);


