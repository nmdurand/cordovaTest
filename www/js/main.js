$(document).ready(function(){
	$('.testButton').on('click', function(event){
		elem = document.createElement('div');
		$(elem).addClass('clickElement').html('CLICK');
		$('.resultClick').append(elem);
		setTimeout(function() {$('.resultClick').children().last().remove();}, 2000);
	});
	$('.testButton').on('touchend', function(event){
		elem = document.createElement('div');
		$(elem).addClass('touchendElement').html('TOUCHEND');
		$('.resultTouchend').append(elem);
		setTimeout(function() {$('.resultTouchend').children().last().remove();}, 2000);
	});

	// function setInput(numValue){};
});
