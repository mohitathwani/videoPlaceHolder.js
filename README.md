videoPlaceHolder.js
================

###Use this small javascript code to show a poster image at the end of a video with video tags in HTML 5


The Markup:

    <div id="video">
      <video controls poster="img/placeholder.png" class=".video" onended="videoEnd()">
        <source src="video/video.ogg" type="video/ogg"> 
          <source src="video/video.mp4" type="video/quicktime">
            I'm sorry; your browser doesn't support HTML5 video.
          </video>
    </div>
    
The JS:

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

    
###Instructions:

Make sure to have the markup exactly as shown ablove. Include the videoPlaceHolder.js file in your html file.

Modify the location of the placeholder images appropriatly in the html file and the js file.
