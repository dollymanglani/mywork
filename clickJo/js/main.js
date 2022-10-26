$(document).ready(function() {
	// Burger Menu JS
	$(".sub-menu-listing").slideUp();
	$(".burger-menu").click(function() {
		$(this).toggleClass("active");
		$(".navigation-menu").slideToggle(700);
    $("body").toggleClass("overflow-hidden");
    $(".bg-blur").toggleClass("active");
	});
	$(".menu-listing > li:nth-child(4) > a").click(function() {		
		$(".sub-menu-listing").slideToggle();
	});
});