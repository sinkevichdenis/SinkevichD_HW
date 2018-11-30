(function () {
	"use strict";

	document.querySelectorAll('.menu-direction__closed').forEach(function (element)
	{
		var numberElem = element.querySelectorAll('.menu-link').length-1,
			myClass = "menu-direction__opened",
			heightMainLink = getHeight(".menu-title-link"),
			heightOtherLink = getHeight(".link-size");

		function getHeight(elemClass)
		{ //получает значение высоты в данном классе
			var heightElement;
			heightElement = element.querySelector(elemClass);
			heightElement = parseInt(getComputedStyle(heightElement).height);
			return heightElement;
		}

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
