var jewel = {
	screens: {}
};
//wait until main document is loaded

window.addEventListener("load", function() {
	//Check for iOS Web App mode
	Modernizr.addTest("standalone", function() {
		return (window.navigator.standalone != false);
	});
	//start dynamic loading

	//Loading stage 1
	Modernizr.load([{
		//these files are always loaded
		load : [
		"scripts/sizzle.js",
		"scripts/dom.js",
		"scripts/game.js"
		]
	}, {
		test : Modernizr.standalone,
		yep : "scripts/screen.splash.js",
		nope : "scripts/screen.install.js",
		complete : function() {
			if (Modernizr.standalone) {
				jewel.game.showScreen("splash-screen");
			} else {
				jewel.game.showScreen("install-screen");
			}
		}
	}]);

	//Loading stage 2
	if (Modernizr.standalone) {
		Modernizr.load([{
			load : ["scripts/screen.main-menu.js"]
		}]);
	}

}, false);