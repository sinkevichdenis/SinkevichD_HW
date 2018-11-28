(function () {
	"use strict";

	document.querySelectorAll('.menu-direction__closed').forEach(function (element)
	{
		var numberElem = element.querySelectorAll('.menu-link').length-1,
			myClass = "menu-direction__opened",
			heightMainLink = parseInt(getComputedStyle(element.querySelector(".menu-title-link")).height),
			heightOtherLink = parseInt(getComputedStyle(element.querySelector(".link-size")).height);



		element.onmouseover = function ()
		{
			element.classList.add(myClass);
			element.style.height = heightMainLink + heightOtherLink * numberElem + "px"; 

		};
		element.onmouseout = function ()
		{
			element.classList.remove(myClass);
			element.style.height = heightMainLink + "px"; 
		};
	});
})();
