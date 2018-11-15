(function ()
{

	document.querySelectorAll(".slides").forEach(function (element)
	{
		var slideSize = element.clientWidth,
			currentPosition = 0;
	
		setInterval(function()
		{
			currentPosition += slideSize;
		
			if (currentPosition >= element.scrollWidth) 
			{
				currentPosition = 0;
			}

			element.scroll({left: currentPosition, behavior: "smooth"});
		}, 2000);

	})

})();



