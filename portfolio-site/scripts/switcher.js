// wait until the document is loaded
$(document).ready( function() {

	// attach the click event handler to elements of class `thumb'
	$(".thumb").click( function() {

		// get the src attribute of the clicked element
		var path = $(this).attr("src");

		// set the src attribute of the main image
		$("#mainImg img").attr("src", path);

		// make the border colour of all .thumb elements grey
		$(".thumb").css("border-color", "#999");

		// make the border colour of the clicked on element pink
		$(this).css("border-color", "black");

	});

});
