(function () {
    var data = [
    {
        text: 'some text 1',
        display: true,
        disable: false
    },
    {
        text: 'some text 2',
        display: false,
        disable: false
    },
    {
        text: 'some text 3',
        display: true,
        disable: true
    },
    {
        text: 'some text 4',
        display: true,
        disable: false
    },
    ],
    exampleText = "item 1 ",
    resultFilter,
    resultMap,
    resultEach;

    resultFilter = data.filter(element => element.display && !element.disable);
    console.log(resultFilter);

    resultMap = resultFilter.map(function (element){
        return element.text});
    console.log(resultMap);

    resultMap.forEach(function (element) {
        console.log(exampleText, element);    
    })

})();

