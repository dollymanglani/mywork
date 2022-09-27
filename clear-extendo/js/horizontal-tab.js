$(document).ready(function() {
	$('.tab-listing > li > a').click(function(event){
		event.preventDefault(); // stop browser to take action for clicked anchor
		// get displaying tab content jQuery selector
		var active_tab_selector = $('.tab-listing > li.active > a').attr('href');
		// find actived navigation and remove 'active' css
		var actived_nav = $('.tab-listing > li.active');
		actived_nav.removeClass('active');
		// add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');
		// hide displaying tab content
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
		// show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
	});
	$(".hmde-listing > li > a").click(function (event) {
		event.preventDefault();
		$(".card-number, .card-date, .card-cvv").toggle();
		$(this).fadeOut(function () {
				$(this).text(($(this).text() == 'Hide my details') ? 'Show my details' : 'Hide my details').fadeIn();
		})
	});
});