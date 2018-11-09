(function () {
	"use strict";

	document.querySelectorAll('.tabs').forEach(function (tabsElement) 
	{
		var selectElement = tabsElement.querySelector('.tabs-select'),
			tabsContainerElement = tabsElement.querySelector('.tabs-tabsContainer'),
			myClass = "tabs-container-tab-selected";

		console.log('current value: ', selectElement.value);
		getTabByName(tabsContainerElement, selectElement.value).classList.add(myClass); 

		selectElement.onchange = function () 
		{
			console.log('new value: ', selectElement.value);
			tabsContainerElement.querySelector("." + myClass).classList.remove(myClass);
			getTabByName(tabsContainerElement, selectElement.value).classList.add(myClass); 
		};
	});

	function getTabByName(tabsContainerElement, name) 
	{
		return tabsContainerElement.querySelector('[data-name=' + name + ']');
	}
})();
