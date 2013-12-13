var onlineForLife = window.onlineForLife || {}; onlineForLife.USMap = onlineForLife.USMap || {};
onlineForLife.USMap = {
	init: function(){
		onlineForLife.USMap.setupMap();
		onlineForLife.USMap.setupHandlers();
		onlineForLife.USMap.toggleState('CA');
	},
	
	setupMap:function(){
		$('#map').usmap({
			'stateStyles': {
				fill: '#EAEDEC', 
				"stroke-width": 2,
				'stroke' : '#fff'
			},
			click: function(event, data) {
				
			},
  			mouseover: function(event, data) {
				//event.preventDefault();
				fill: '#D34923'
			},
  			'stateHoverStyles': {
				fill: '#D34923'
			},
			showLabels: false,
		});
	},
	
	setupHandlers:function(){

	},
	
	toggleState:function(state){
		console.log('toggleState: ' + state);
		$('#map').usmap('trigger', state, 'mouseover');
		setTimeout(function() {
			$('#map').usmap('trigger', state, 'mouseout');
		}, 3000);
	}
	


};
$(function() {
	onlineForLife.USMap.init();
});


