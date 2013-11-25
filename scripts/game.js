jewel.game = (function() {
	var dom = jewel.dom, $ = dom.$;
	// hide the active screen (if any) and show the screen
	// with the specified id
	function showScreen(screenId) {
		var activeScreen = $("#game .screen.active")[0], 
			screen = $("#" + screenId)[0];
		if (activeScreen) {
			dom.removeClass(activeScreen, "active");
			console.log("Screen: previous screen hidden.");
		}
		jewel.screens[screenId].run();
		dom.addClass(screen, "active");
		console.log("Screen: " + screenId + " loaded.");
	}
	// expose public methods
	return {
		showScreen : showScreen
	};
})();