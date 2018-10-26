	function prioritySort(array, dataPriority) 
	{
		for (var i=0; i<array.length; i++)
		{
			if (array[i] === null)
				{
					nullArray[nullArray.length] = array[i];
				}
			else
			{
				switch (typeof array[i])
				{
					case dataPriority[0]:
						ts[0][ts[0].length] = array[i];
						break;
					case dataPriority[1]:
						ts[1][ts[1].length] = array[i];
						break;
					case dataPriority[2]:
						ts[2][ts[2].length] = array[i];
						break;
					case dataPriority[3]:
						ts[3][ts[3].length] = array[i];	
						break;
					case dataPriority[4]:
						ts[4][ts[4].length] = array[i];
						break;
					case dataPriority[5]:
						ts[5][ts[5].length] = array[i];
						break;
					default:
						console.log("unknown type: ", array[i]);
				}
			}
		}
		return getSortArray();
	}

	function prioritySort(array, dataPriority) 
	{
		for (var i=0; i<array.length; i++)
		{
			if (array[i] === null)
			{
				nullArray[nullArray.length] = array[i];
			}
			else
			{
				var checkData = 0; //нужно для проверки, имеется ли у нас в сортировщике необходимый тип данных
				for (var j=0; j<dataPriority.length; j++)
				{
					if (typeof array[i] === dataPriority[j])
					{
						ts[j][ts[j].length] = array[i];
						checkData = 1;
						break;
					}
				}
				if (checkData === 0) // сработает, если значение не найдет свой тип данных
				{
					console.log("unknown type: ", array[i]);
				}
			}
		}
		return getSortArray();
	}

		function prioritySort(array, dataPriority) 
	{
		for (var i=0; i<array.length; i++)
		{
			var checkData = 0; //нужно для проверки, имеется ли у нас в сортировщике необходимый тип данных
			if (array[i] === null)
			{
				nullArray[nullArray.length] = array[i];
				checkData = 1;
			}
			else
			{

				for (var j=0; j<dataPriority.length; j++)
				{
					if (typeof array[i] === dataPriority[j])
					{
						ts[j][ts[j].length] = array[i];
						checkData = 1;
						break;
					}
				}
			}
			if (checkData === 0) // сработает, если значение не найдет свой тип данных
			{
				console.log("unknown type: ", array[i]);
			}
		}
		return getSortArray();
	}