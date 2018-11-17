document.querySelectorAll(".slides").forEach(function (element)
{
	var slideSize = element.clientWidth,
		currentPosition = 0,
		indexInterval;

	function startSlider()
	/*если сделать функцию самовызывающейся, то мы не сможем 
	потом к ней повторно обратится*/
	{
		indexInterval = setInterval(function()
		{
			currentPosition += slideSize;
			if (currentPosition >= element.scrollWidth) 
			{
				currentPosition = 0;
				element.scroll({left: currentPosition, behavior: "auto"});
			}
			element.scroll({left: currentPosition, behavior: "smooth" });
		}, 500);
	}	

	startSlider();	
	document.querySelector(".start-button").onclick = function ()
	{
		startSlider();
		document.querySelector(".start-container").style.setProperty("display","none");
		document.querySelector(".stop-container").style.setProperty("display","flex");
	};

	document.querySelector(".stop-button").onclick = function ()
	{
		clearInterval(indexInterval);
		document.querySelector(".start-container").style.setProperty("display","flex");
		document.querySelector(".stop-container").style.setProperty("display","none");
	};

})




