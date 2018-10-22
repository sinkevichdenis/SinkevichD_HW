var array1 = [123, "string", true, {value: 321}, null],
    array2 = ["first", "second", "last"],
    result = [];

for(var i=0; i<array1.length; i++)
{
	result[i]=array1[i];
}
for(var j=0; j<array2.length; j++)
{
	result[i+j]=array2[j];
}
console.log("result: ", result);