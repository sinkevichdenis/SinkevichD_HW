(function () 
{
	var data = [1, 'firstString', 4, 30, 500, true, true, null, 'abc', false, {test: undefined}, undefined],
	result,
	typeSort = ['number', 'null', 'string', 'object', 'undefined', 'boolean'], 
	resultSort;

	data = data.sort();
	console.log('without Sort:', data);
	data = data.sort(compareNumbers);
	console.log('with Sort:', data);
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
					console.log(dataPriority[0], i, array[i]);
					break;
				case dataPriority[2]:
					console.log(dataPriority[2], i, array[i]);
					break;
				case dataPriority[3]:
					if (array[i] === null) 
					{
						console.log(dataPriority[1], i, array[i]);
						break;
					}
					else 
					{
						console.log(dataPriority[3], i, array[i]);
						break;
					}
				case dataPriority[4]:
					console.log(dataPriority[4], i, array[i]);
					break;
				case dataPriority[5]:
					console.log(dataPriority[5], i, array[i]);
					break;
			}
		}
	}

	function addInSortArray(array,dataPriority)
	{

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


/*  for( i=0; i < size; i++) {            // i - номер прохода
	for( j = size-1; j > i; j-- ) {     // внутренний цикл прохода
	  if ( a[j-1] > a[j] ) {
	  x=a[j-1]; a[j-1]=a[j]; a[j]=x;
	}*/


// var byDate = arrayOfObjects.slice();
/*console.log(byDate);
function mySort(i,ii) {
		if (i["name"] > ii["name"])         return 1;
 else if (i["name"] < ii["name"])        return -1;
	else        return 0;
}

byDate.sort(mySort);
console.log('by date:');
console.log(byDate);*/