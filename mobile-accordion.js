/*!
 * Resposive Mobile Slider 1.0
 * A Simple JQuery Accordion
 *
 * Original by Vallenato
 *
 * Modified by Matthew Aisthorpe
 * 
 * Use this plugin for whatever you want, enjoy!
 * 
 */

$(document).ready(function()
{
	//Add Inactive Class To All Accordion Headers
	$('.accordion-header').toggleClass('inactive-header');
	
	//Set The Accordion Content Width
	var contentwidth = $('.accordion-header').width();
	$('.accordion-content').css({'width' : contentwidth });
	
	//Open The First Accordion Section When Page Loads //uncomment this section if you want this functionality
	/*$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.accordion-content').first().slideDown().toggleClass('open-content');*/
	
	//scrolls to top of accordion section when opened
	function goToByScroll(section){
	    var height = section.offset().top;
		//alert(height);
		$('html,body').animate({
			scrollTop:(section.offset().top - 64)
	    }, 'fast');
	}
	
	// The Accordion Effect
	$('.accordion-header').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle( 'fast' ).toggleClass('open-content');
			/*$(this).next().slideToggle( 'fast' ).toggleClass('open-content').promise().done( function() { 
				goToByScroll( $('.active-header') ); 
			});*/
		}
		else 
		{
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		window.setTimeout(function(){
			goToByScroll( $('.active-header') );
		}, 400);
	});
	
	return false;
});