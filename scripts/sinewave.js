function setup() {
  createCanvas(400, 400);
  stroke(255);
  strokeWeight(5);
  background(0);
  frameRate(60)
}
var x1 = 0;
var y1 = 150;
var x2 = 0;
var y2 = 0;
var a = 0.1;

function draw() {
  if (x2 < width) { // Stops loop when end of canvas is reached
    x2 = x2 + 1; // Moves line along canvas
    y2 = 200 * sin(a) + (height / 2); // Multiplier stretches wave, sin function produces wave, addition offsets wave to middle of canvas
    a += 0.1; // Increases radian value for use in sin function
    line(x1, y1, x2, y2);
    x1 = x2; // Set start of new line to equal end of previous line
    y1 = y2;
  }
}