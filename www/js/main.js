$(document).ready(function(){
	$(function() {
		FastClick.attach(document.body);
	});

	$('.testButton').on('click', function(event){
		elem = document.createElement('div');
		$(elem).addClass('clickElement').html('CLICK');
		$('.resultClick').append(elem);
		setTimeout(function() {$('.resultClick').children().last().remove();}, 2000);
	});
	// $('.testButton').on('touchend', function(event){
	// 	elem = document.createElement('div');
	// 	$(elem).addClass('touchElement').html('TOUCHEND');
	// 	$('.resultTouchend').append(elem);
	// 	setTimeout(function() {$('.resultTouchend').children().last().remove();}, 2000);
	// });
	$('.testButton').on('touchstart', function(event){
		elem = document.createElement('div');
		$(elem).addClass('touchElement').html('TOUCHSTART');
		$('.resultTouchstart').append(elem);
		setTimeout(function() {$('.resultTouchstart').children().last().remove();}, 2000);

		var eventCancelled = new Boolean(false);
		target=event.target;
		console.log('Touchstart event',event,' on target:',target);
		$(target).one('touchcancel', function(event){
			eventCancelled = true;

			elem = document.createElement('div');
			$(elem).addClass('touchElement').html('TOUCHCANCEL');
			$('.resultTouchcancel').append(elem);
			setTimeout(function() {$('.resultTouchcancel').children().last().remove();}, 2000);
		});
		$(target).one('touchend', function(event){
			if (eventCancelled == false) {
				elem = document.createElement('div');
				$(elem).addClass('touchElement').html('TOUCHEND');
				$('.resultTouchend').append(elem);
				setTimeout(function() {$('.resultTouchend').children().last().remove();}, 2000);
			}
			$(target).off('touchcancel');
		});
	});
	$('.testButton').on('touchcancel', function(event){
		elem = document.createElement('div');
		$(elem).addClass('touchElement').html('TOUCHCANCEL');
		$('.resultTouchcancel').append(elem);
		setTimeout(function() {$('.resultTouchcancel').children().last().remove();}, 2000);
	});
});
