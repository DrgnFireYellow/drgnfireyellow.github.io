
  
var c = "black";
var erasing = false
var s = 1
function changesize() {
  s = this.value()
}
function enterpaintmode() {
  erasing = false
}
function eraser() {
  c = "white"
}
function setred() {
  enterpaintmode()
  c = "red";
}
function setorange() {
  enterpaintmode()
  c = "orange";
}
function setyellow() {
  enterpaintmode()
  c = "yellow";
}
function setgreen() {
  enterpaintmode()
  c = "green";
}
function setblue() {
  enterpaintmode()
  c = "blue";
}
function setpurple() {
  enterpaintmode()
  c = "purple"
}
function setblack() {
  enterpaintmode()
  c = "black"
}
function saveDrawing() {
  saveCanvas("drawing", "png")
}
function setup() {
  createCanvas(1000, 700);
  background(255);
  // create buttons
  redbutton = createButton("red");
  orangebutton = createButton("orange");
  yellowbutton = createButton("yellow");
  greenbutton = createButton("green");
  bluebutton = createButton("blue");
  purplebutton = createButton("purple")
  blackbutton = createButton("black")
  eraserbutton = createButton("<img src=\"erase.svg\">")
  savebutton  = createButton("save");
  // what to do when buttons are clicked
  redbutton.mousePressed(setred);
  orangebutton.mousePressed(setorange);
  yellowbutton.mousePressed(setyellow);
  greenbutton.mousePressed(setgreen);
  bluebutton.mousePressed(setblue);
  purplebutton.mousePressed(setpurple);
  blackbutton.mousePressed(setblack);
  eraserbutton.mousePressed(eraser);
  savebutton.mousePressed(saveDrawing);
  // style buttons
  redbutton.style("background-color: red; color: white;");
  orangebutton.style("background-color: orange; color: white;");
  yellowbutton.style("background-color: yellow; color: black;");
  greenbutton.style("background-color: green; color: white;");
  bluebutton.style("background-color: blue; color: white;");
  purplebutton.style("background-color: purple; color: white;");
  blackbutton.style("background-color: black; color: white;");
  // ---
  sizeinput = createInput('1', "number")
  sizeinput.input(changesize)

}

function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    stroke(c);
    strokeWeight(s)
  }
}
