$(document).ready(function() {
	/* GOOGLE MAPS */
	$('#b-link').click(function() {
		if($('#map-frame').height() == 0) {
			$('#map-frame').animate({
				height: '300px',
				'padding-bottom': '2em'
			}, 400);
		} else {
			$('#map-frame').animate({
				height: '0',
				'padding-bottom': '0'
			}, 400);
		}
	});
});