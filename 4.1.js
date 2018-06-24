$(function(){
		$(window).on("load resize",function(){
			$(".fill-scneen1").css("height",window.innerHeight);
		})
})
/*menu-scrolling*/
$('body').scrollspy({target:'.navbar' , offset: 150});


$('.progress-bar').each(function(){
	var value =$(this).attr('aria-valuenow') + '%';
	$(this).animate({width:bar_blue},{duration: 2000,easing:'easeOutCirc'});
	});
/*scrolling==================
=============================
$('body').scrollspy({
	target:'.navbar',
	offset:150
	});	

$('nav a').bind('click', function(){
	$($(this).attr('href')).animatescroll({scrollSpeed: 3000, padding: 50});
	event.preventDefault();
});
==========================*/
	