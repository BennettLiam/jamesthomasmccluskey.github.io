function preload() {
  img = loadImage("https://gitlab.com/jamesthomasmccluskey/jamesthomasmccluskey/blob/master/portfolio-site/scripts/assets/area_map.jpg", function(img) {
    image(img, 0, 0);
  });
}
function setup() {
	createCanvas(1773, 791);
	noStroke();
}
function gotCrimeData(data) {
	crimenumb = data.length;
	map(crimenumb,0,130,20,200)
}
function draw() {
	function mouseMoved() {
		var mapmouseX = map(mouseX,0,400,-50,50)
		var mapmouseY = map(mouseY,0,400,-50,50)
		var url = "https://data.police.uk/api/crimes-street/vehicle-crime?lat="+str(mapmouseX)+"&lng="+str(mapmouseY)+"&date=2018-04";
		loadJSON(url, gotCrimeData);
		gotCrimeData(data)
		var colour = crimenumb
		fill(colour);
	}
}