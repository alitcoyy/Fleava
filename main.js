(function($){
	$(document).ready(function(){

		// Carousel Image Properties
	    $('.carousel-image').owlCarousel({
	      	center: true,
		    items:2,
		    loop:true,
		    margin:15,
		    autoplay:true,
    		autoplayTimeout:1000,
    		autoplayHoverPause:true,
		    responsive:{
		       600:{
		           items:4
		       }
		    }
	    }); 

	    // Add Class Scrolled when the page is scrolled more than 700px 
	    $(window).scroll(function() {    
		    var scroll = $(window).scrollTop();

		    if (scroll >= 700) {
		        $("nav").addClass("scrolled");
		    } else {
		        $("nav").removeClass("scrolled");
		    }
		});

	    // Animate Elements on Header Section
	    TweenMax.from(".logo", 1, {x: -100, opacity: 0, delay: 0.5});
		TweenMax.from(".menu", 1, {x: 100, opacity: 0, delay: 1});
		TweenMax.from(".header-content", 1, {x: 100, opacity: 0, delay: 1.5});
		TweenMax.from(".header-btn", 0.5, {y: -100, opacity: 0, delay: 2});
		TweenMax.from(".scroll-bottom-wrapper", 0.5, {y: -100, opacity: 0, delay: 3});

    });
})(jQuery);
