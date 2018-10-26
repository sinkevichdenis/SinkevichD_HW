(function () 
{
	var data = [1, 'firstString', 4, 30, 500, true, true, null, 'abc', false, {test: undefined}, undefined],
	result,
	typeSort = ['number', 'null', 'string', 'object', 'undefined', 'boolean'], 
	numberArray = [],
	nullArray = [],
	stringArray = [],
	objectArray = [],
	undefinedArray = [],
	booleanArray = [],
	finalArray = [];

	window[typeSort[0] + "Array1"] = 17838;
	console.log("window: ", window[typeSort[0] + "Array1"]);

	result = prioritySort(data, typeSort);
	//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]

	
	console.log('result', result);

	function prioritySort(array, dataPriority) 
	{
		for (var i=0; i<array.length; i++)
		{
			switch (typeof array[i])
			{
				case dataPriority[0]:
					numberArray[numberArray.length] = array[i];
					break;
				case dataPriority[2]:
					stringArray[stringArray.length] = array[i];
					break;
				case dataPriority[3]:
					if (array[i] === null) 
					{
						nullArray[nullArray.length] = array[i];
						break;
					}
					else 
					{
						objectArray[objectArray.length] = array[i];
						break;
					}
				case dataPriority[4]:
					undefinedArray[undefinedArray.length] = array[i];
					break;
				case dataPriority[5]:
					booleanArray[booleanArray.length] = array[i];
					break;
			}
		}
		return finalArray.concat(numberArray.sort(compareNumbers), nullArray.sort(compareNumbers), stringArray.sort(compareNumbers), objectArray.sort(compareNumbers), underfinedArray.sort(compareNumbers), booleanArray.reverse(booleanArray.sort(compareNumbers)));
	}

	function compareNumbers(a, b) 
	{
		if (a > b)         
		{
			return 1;
		}
 		else if (a < b)  
 		    {
 		    	return -1;
 		    }
			else       
		 	{
		 		return 0;
		 	}
	}

}());

