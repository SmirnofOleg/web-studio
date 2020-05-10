$(document).ready(function () {
	let link = $('.menu-btn');
	let menu = $('.my-menu');
	let content = $('.content');
	link.click(function () {
		menu.toggleClass('menu-open');
		content.toggleClass('content-hide');
	});

	// nav_link.click(function () {
	// 	menu.toggleClass('menu-open');
	// });


	new WOW().init();



});