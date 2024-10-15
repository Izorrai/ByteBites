$(document).ready(function()
 {
	 $(".info_link").hide();
	 
	 
	 if ($(window).width() > 760) {
   			$('.hamburguesa').show()
			$('.flecha').hide()
			}
			else {
			$('.hamburguesa').show()
			$('.flecha').hide()	
   			}
		
		
	$('.hamburguesa').click(function()
		{
		$('.hamburguesa').hide()
		$('.flecha').show()
	
		$('.Menu_hamburguesa').slideToggle()
		})
	
	$('.flecha').click(function()
		{
		$('.flecha').hide()
		$('.hamburguesa').show()
		$('.Menu_hamburguesa').slideToggle()
	})
			
	$('.hamburguesa').click(function()
	{
	$(this).children('ul').slideToggle()
	})
		
	
	
	
	/* $(window).resize(function()
	{
	$('.flecha').hide()
	$('.hamburguesa').show()	
	$('.Menu_hamburguesa').slideToggle()
		
		
		if ($(window).width() > 760) {
   			$('.hamburguesa').hide()
			$('.buscador').show()
			}
			else {
			$('.hamburguesa').show()	
   			$('.buscador').hide()
			}
		
	
	}) */
	
	$('.menu').children('li').hover(function()
	{
	$(this).children('.info_link').show()
	},
		function()
		{
		$('.info_link').hide()
	
	})
	
	
	
	
	
 
 })