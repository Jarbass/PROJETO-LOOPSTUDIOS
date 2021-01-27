function openNav() {
    document.getElementById("myNavMobile").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNavMobile").style.width = "0";
}

//SUAVIZAR SCROLL
$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});