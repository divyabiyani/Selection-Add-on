var self = require('sdk/self').data;
var clipboard = require("sdk/clipboard");
var selection = require("sdk/selection");
var selected_text =[];
var result;


function myListener() {

 	if (selection.text){
		selected_text= selected_text.concat(selection.text);
		result= selected_text.toString();
	}  
	clipboard.set(result);

}
function handleClick(state) {
			selection.on('select', myListener);
			console.log(result);
}


//var ser_url = "http://www.bing.com/search?q="+result;

var search_data = require("sdk/panel").Panel({
	position: {
    	top: 0,
    	right: 0
  	},
	hight: 100,
});

require("sdk/ui/button/action").ActionButton({
	id: "Selection",
	label: "Click to start saving your next selections to clipboard",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
});


