(function() {
	// plugin options for each word
	var options = [
		{ 	// word 1
			size : 150,
			weight : 2,
			color: '#ffffff',
			duration:1.5,
			fade: 1,
			delay: [2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4],
			individualDelays: true,
			easing: d3_ease.easeCubicOut.ease

		}
	],

	// items (li)
	items = [].slice.call(document.querySelectorAll('ul.list > li.list__item'));

	function init() {
		
		items.forEach(function(item, pos) {
			var word = item.querySelector('.list__text'),
				playCtrl = item.querySelector('.control__button--play'),
				// initialize the plugin
				instance = new Letters(word, options[pos]),
				endPlayCallback = function() {
				};
			
			// show word
			instance.showInstantly();

			instance.hideInstantly();

			instance.show({callback: endPlayCallback});

			
		});
	}

	init();

})();
