var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";	

	try{	
		if ($(".animated")[0]) {
			$('.animated').css('opacity', '0');
		}

		$('.triggerAnimation').waypoint(function() {			
			var animation = $(this).attr('data-animate');
			$(this).css('opacity', '');
			$(this).addClass("animated " + animation);
		},
			{
				offset: '80%',
				triggerOnce: true
			}
		);		
	} catch(err) {
	}

	// JavaScript Document

    
    var $allVideos = jQuery("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
    $fluidEl = jQuery(".st-block .background");
	    	
	$allVideos.each(function() {
	
	  jQuery(this)
	    // jQuery .data does not work on object/embed elements
	    .attr('data-aspectRatio', this.height / this.width)
	    .removeAttr('height')
	    .removeAttr('width');
	
	});
	
	jQuery(window).resize(function() {	
	
	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {
	  
	    var $el = jQuery(this);
	    $el
	        .width(newWidth)
	        .height(newWidth * $el.attr('data-aspectRatio'));
	  
	  });
	
	}).resize();	

	/*-------------------------------------------------*/
	/* =  parallax
	/*-------------------------------------------------*/
	
	try{
		$('.st-block-parallax').appear(function() {	
			var block = $(this);
			$.stellar({
				horizontalScrolling: false,
			    verticalOffset: 0,
			    horizontalOffset: 0		
			});
		});
	} catch(err) {
	}
});