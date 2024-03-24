import * as flsFunctions from "./modules/functions.js";
import openTab from "./modules/tabs.js"
import Macy from "macy";

flsFunctions.isWebP();

document.addEventListener("DOMContentLoaded", function() {
	const tablinks = document.getElementsByClassName("tablinks");
	for (let i = 0; i < tablinks.length; i++) {
	  tablinks[i].addEventListener("click", function(event) {
		const tabName = this.getAttribute("data-index-tab");
		openTab(event, tabName);
	  });
	}
  });

  var masonry = new Macy({
	container: '#macy-container',
	trueOrder: true,
	waitForImages: false,
	useOwnImageLoader: false,
	debug: true,
	mobileFirst: true,
	columns: 1,
	margin: {
		y: 10,
		x: '18px', 
	},
	breakAt: {
		1200: 2,
		360: 1
	},
});
  
