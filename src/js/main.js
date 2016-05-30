//Required modules

var responsiveNav = require("responsive-nav");
var Flickity = require("flickity");

//Scripts

document.addEventListener("DOMContentLoaded",function(){

	var flickity = new Flickity(".flickity", {
		contain: true,
		wrapAround:true
	});

	var nav = responsiveNav(".nav-collapse", {
		transition: 400,
		insert:'after'
	});

});