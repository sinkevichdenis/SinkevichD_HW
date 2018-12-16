(function () {
	"use strict";

	document.querySelectorAll('.dropdown').forEach(function (element)
	{
		var button = element.querySelector(".dropdown_button"),
			blockList = element.querySelector(".dropdown_links"),
			blockSizeLink = element.querySelector(".link-size"),
			heightLink = getHeight(blockSizeLink),
			classClosed = "block-flex__closed",
			classOpen = "block-flex__open",
			classLabel = "inverse-x";

		function getHeight(elemClass)
		{ //получает значение высоты в данном классе;
			return parseInt(getComputedStyle(elemClass).height);;
		}

		button.onclick =  function ()
		{
			blockList.classList.toggle(classClosed);
			blockList.classList.toggle(classOpen);
			button.classList.toggle(classLabel);
		}
	})
})()