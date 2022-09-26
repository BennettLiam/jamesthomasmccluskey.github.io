const mapWidthMiles = 24;

var canvasWidth = window.screen.availWidth*0.8;
var canvasHeight = 0;

function preload() {
  backgroundImg = loadImage("scripts/assets/area_map.jpg",()=>{
    canvasHeight = canvasWidth / (backgroundImg.width/backgroundImg.height)
  });
}

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("canvasDiv");
  cursorCircle = createGraphics(canvasWidth, canvasHeight);
  setInterval(getCrimeData,250);
}

function draw() {
  cursorCircle.clear();
  cursorCircle.ellipse(mouseX,mouseY,2*canvasWidth/mapWidthMiles,2*canvasWidth/mapWidthMiles);
  image(backgroundImg, 0, 0,canvasWidth,canvasHeight);
  image(cursorCircle, 0, 0);
}

var lastUrl;
const getCrimeData = () =>{
  
  var mapmousex = map(mouseX,0,canvasWidth,-1.943066,-1.338474);
	var mapmousey = map(mouseY,0,canvasHeight,53.921540,53.763338);
  mapmousex = nf(mapmousex,1,6);
  mapmousey = nf(mapmousey,2,6);
	var url = "https://data.police.uk/api/crimes-street/vehicle-crime?lat="+mapmousey+"&lng="+mapmousex+"&date=2022-01";
  if(lastUrl!=url){
    loadJSON(url,gotCrimeData);
    lastUrl=url;
  }
}

function gotCrimeData(data) {
  console.log(data.length);
  crimenumb = data.length;
  red = map(crimenumb,0,100,0,255);
  green = map(crimenumb,0,100,255,0);
  cursorCircle.fill(red,green,0,127);
}