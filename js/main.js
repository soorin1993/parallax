/*
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
	// trigger a velocity opaticy animation
	.setVelocity("#text1", {opacity: 0}, {duration: 400})
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);
*/
$('#text1').hide();
$('#text2').hide();
$('#text3').hide();
$('#text4').hide();

$(".parallax").scroll(function() {
	var y = $(this).scrollTop();
	console.log(y);
	if (y >= 500) {
		$('#text1').fadeIn();
	} 
	else {
		$('#text1').fadeOut();
	}
	
	if (y >= 625) {
		$('#text2').fadeIn();
	} 
	else {
		$('#text2').fadeOut();
	}
	
	if (y >= 700) {
		$('#text3').fadeIn();
	} 
	else {
		$('#text3').fadeOut();
	}
	
	if (y >= 1100) {
		$('#text4').fadeIn();
	} 
	else {
		$('#text4').fadeOut();
	}
	
});