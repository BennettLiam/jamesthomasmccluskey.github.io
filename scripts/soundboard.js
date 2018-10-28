function preload() {
  piano = loadSound("https://jamesthomasmccluskey.github.io/sounds/piano.mp3"); //Loads the sounds from an external web server and links the specified strings
  guitar = loadSound("https://jamesthomasmccluskey.github.io/sounds/guitar.mp3");
  drum = loadSound("https://jamesthomasmccluskey.github.io/sounds/drum.mp3");
}
function setup() {
  createCanvas(400, 400); //Drawing up the circles and text with predefined colours
  background(150);
  textSize(60);
  text("Soundboard",40,60);
  textSize(32);
  text("Drum",160,270);
  text("Guitar",260,185);
  text("Piano",60,185);
  fill(0);
  fill(255,0,0);
  ellipse(100,250,100,100);
  fill(0,255,0);
  ellipse(300,250,100,100);
  fill(0,0,255);
  ellipse(200,335,100,100);
}

function draw() {
  posColor = get(mouseX,mouseY); //Setting posColor to an array containing the colour values of the pixel the mouse is on
  console.log(posColor); //Logging colour values
  if (posColor[0] == "255" && piano.isPlaying() == false) { //Querying one of the values in posColor, if it matches the value associated with a sound it then checks if the sound is playing if not it plays the sound
    piano.play();
  }
  if (posColor[1] == "255" && guitar.isPlaying() == false) {
    guitar.play();
  }
  if (posColor[2] == "255" && drum.isPlaying() == false) {
    drum.play();
  }
}