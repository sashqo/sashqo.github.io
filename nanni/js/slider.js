
$(document).ready(function() {
    $('.top-slider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.top-slider__item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.top-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.top-slider__item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);    
    });
   
    $('.secondary-slider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.secondary-slider__item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.secondary-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.secondary-slider__item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);    
    });
 $('.top-slider').slick({	
	fade: true,
	speed:1000,
	prevArrow: '<div class="slick-prev2"></div>',
	nextArrow: '<div class="slick-next2"></div>'	
}	);
$('.secondary-slider').slick({
	autoplay:false,	
	fade: true,
	speed:1000,
	dots:true,	
	dotsClass: 'catalogue__nav',
	prevArrow: '<div class="slick-prev3"></div>',
	nextArrow: '<div class="slick-next3"></div>'	
}	);
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
});

