var Alloy = require('alloy'),
	Backbone = Alloy.Backbone,
	_ = Alloy._,
	$;

function preLayout(args) {
	$ = this;
}

function postLayout(args) {
	for (var k in args) {
		$.loading[k] = args[k];	
	}

	if (Ti.Platform.osname === 'mobileweb') {
	    $.loading.duration = 100;
	} 
	$.loading.start();

	////////////////////////////////////////////////////////
	////////// Exposed component object functions //////////
	////////////////////////////////////////////////////////
	$.setOpacity = function(opacity) {
		$.loading.opacity = opacity;		
	};
}