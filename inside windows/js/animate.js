jQuery(document).ready(function() {
	
	jQuery('.videolist').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInRight',
		offset: 100
	});
	jQuery('.offer-body--rignt-section').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInUp',
		offset: 300
	});
	jQuery('.offer-body--left-section').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInDown',
		offset: 30
	});
	jQuery('.catalogue').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated slideInLeft',
		offset: 500
	});	
	jQuery('.popular-product').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated zoomIn',
		offset: 300
	});	
	jQuery('.footer-conent').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated slideInUp',
		offset: 300
	});	
});








