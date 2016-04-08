var self = require('sdk/self');
var clipboard = require("sdk/clipboard");
var url = require("sdk/url");
var selected_text =[];
var result;
var flag = false ;
var no=1
function myListener() {

 	if (selection.text){
 		selected_text=selected_text.concat(no);
 		no++;
		selected_text= selected_text.concat(selection.text.toLowerCase());
		selected_text=selected_text.concat("\n");
		result= selected_text.toString();
	}  
	clipboard.set(result);

}
require("sdk/ui/button/toggle").ToggleButton({
	id: "Selection",
	label: "Click to start saving your next selections to clipboard",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onChange(state) {
      if (state.checked) {
        selection.on("select", myListener);
      } else {
		selected_text="";
		no=1;
		clipboard.set(selected_text);
        selection.off("select", myListener);
      }
    }
});
var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("https://www.codechef.com/users/divyabiyani");
}


