// target certain elements and store references to them in variables
var mainImg = document.getElementById("mainImg").getElementsByTagName("img")[0];
var thumbs = document.getElementsByClassName("thumb");

// for each image of class 'thumb', attach event listener
for (var i=0;i<thumbs.length;i++) {
  thumbs[i].addEventListener('click', function() {
    var src = this.src;
    switchMainImgSrc(src);
  })
}

// function to call when a thumb image is clicked
function switchMainImgSrc(src) {
  console.log(mainImg);
  mainImg.src = src;
}
