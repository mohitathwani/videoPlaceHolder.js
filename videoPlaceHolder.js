/*
  Author : Mohit Athwani
	Email : mohit@athwani.net
	Twitter : @UIMohitAthwani
	License : MIT Open Source License

*/

var video = $("#video video"); // The main video tag
var videoDiv = $("#video"); // The Div containing the video tag

function videoEnd() {
	
	video.remove();
	videoDiv.html("<img src='img/placeholder2.png' id='playAgain' style='cursor: pointer;'>"); // Give the source to the placeholder image. In this case we have used another placeholder image which is slightly dimmed out and has a large play button in the center.

	$("#playAgain").click(function(){

		videoDiv.html("<video  autoplay controls poster='img/placeholder.png' class='.video' onended='videoEnd()'><source src='video/video.ogg' type='video/ogg'><source src='video/video.mp4' type='video/quicktime'>I'm sorry; your browser doesn't support HTML5 video.</video>");
	});
	

}
