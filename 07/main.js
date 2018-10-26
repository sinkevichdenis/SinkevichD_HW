"use strict";

(function () 
{
	var data = [1, 'firstString', 4, 30, true, 500, true, null, 'abc', false, {test: undefined}, undefined],
	result,
	// здесь можно менять порядок сортировки типов
	typeSort = ['number', null, 'string', 'object', 'undefined', 'boolean'],
	ts = [];

	(function createArrays()
	{
		//создание массивов для сбора поотдельности данных каждого типа 
		for (var i=0; i<typeSort.length; i++)
		{
			window[typeSort[i] + "Array"] = []; 
			//сокращаем имя для дальнейшего использования
			ts[i] = window[typeSort[i] + "Array"];
		}
	}());

	result = prioritySort(data, typeSort);
	//expected result [1, 30, 500, null, 'abc', 'firstString', {test: 'Object'}, undefined, true, true, false]
	console.log('result', result);

	function prioritySort(array, dataPriority) 
	{
		for (var i=0; i<array.length; i++)
		{
			//checkData нужна для проверки, имеется ли у нас в сортировщике необходимый тип данных
			var checkData = 0; 
			if (array[i] === null)
			{
				//проверка на наличие в критериях сортировки типа null
				if (window.nullArray)
				{
					nullArray.push(array[i]);
					checkData = 1;
				}				
			}
			else
			{
				// перебор и поиск нужного типа данных, кроме null
				for (var j=0; j<dataPriority.length; j++) 
				{
					if (typeof array[i] === dataPriority[j])
					{
						ts[j].push(array[i]);
						checkData = 1;
						break;
					}
				}
			}
			// сработает, если значение не найдет свой тип данных
			if (checkData === 0) 
			{
				console.log("unknown type: ", array[i]);
			}
		}
		return getSortArray();
	}

	function getSortArray()
	{
		//формируем итоговый результат сортировки
		var finalArray = [];
		for (var i=0; i<ts.length; i++)
		{
			if (ts[i] === booleanArray)
			{
				finalArray = finalArray.concat(ts[i].reverse(ts[i].sort(compareNumbers)));
			}
			else
			{
				finalArray = finalArray.concat(ts[i].sort(compareNumbers));
			}
		}
		return finalArray;	
	}

	function compareNumbers(a, b) 
	{
		//условия сортировки по возрастанию
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

