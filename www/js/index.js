$(document).ready(function(){
	console.log('>>> DOCUMENT READY!!!');
	$('#myButton').on('click', function(event){
		console.log("Video play / pause!");
		videoElement = $('#myVideo').get(0);
		if (videoElement.paused){
			videoElement.play();
		}
		else {
			videoElement.pause();
		}
	});
});
