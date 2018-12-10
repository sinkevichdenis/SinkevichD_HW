(function (){
	var elemButton= document.querySelector(".header-button"),
		elemList = document.querySelector(".header-links__current"),
		closeClass = "header-links__fromButton";
	
	elemButton.addEventListener("click", function ()
	{
		elemList.classList.toggle(closeClass);
	})

	window.addEventListener("resize", function()
	{
		if (document.documentElement.clientWidth > 600)
		{
			elemList.classList.remove(closeClass)
		}
	})
})();
