jQuery(document).ready(function() {
	jQuery('.benefits-slider').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInRight',
		offset: 100
	});
	jQuery('.how-to-order').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInLeft',
		offset: 100
	});
	jQuery('.videolist').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInRight',
		offset: 100
	});
	jQuery('.offer-body--left-section').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInUp',
		offset: 100
	});
	jQuery('.offer-body--rignt-section').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInDown',
		offset: 100
	});
});

