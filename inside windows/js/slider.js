$('.benefits-slider').slick({
	autoplay:true,
	speed:1000,
	dots:true	
}	);
$('.catalogue-slider').slick({
	autoplay:false,
	speed:1000,
	dots:true,	
	dotsClass: 'catalogue__nav',
	prevArrow: '<div class="slick-prev2"></div>',
	nextArrow: '<div class="slick-next2"></div>'	
}	);

 $('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav',
}	);
$('.slider-nav').slick({
 	slidesToShow: 3,
 	slidesToScroll: 1,
	asNavFor: '.slider-for',  
  	focusOnSelect: true,
	prevArrow: '<div class="slick-prev3"></div>',
	nextArrow: '<div class="slick-next3"></div>'
}	);
