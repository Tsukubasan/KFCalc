function animationstart() {
	$('#animation-div').toggleClass('circle-animation');
	$('#content').toggleClass('content-animation');
}

window.onload = function () {
	animationstart();
};