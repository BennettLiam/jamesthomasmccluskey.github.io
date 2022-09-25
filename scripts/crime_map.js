function preload() {
  img = loadImage("scripts/assets/area_map.jpg");
}
var canvasWidth = 1773;
var canvasHeight = 791;
function setup() {
  createCanvas(1773, 791);
  pg = createGraphics(1773, 791);
  setInterval(getCrimeData,250);
}

function draw() {
  pg.clear();
  pg.ellipse(mouseX,mouseY,40,40);
  image(img, 0, 0);
  image(pg, 0, 0);
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
  pg.fill(red,green,0,127);
}