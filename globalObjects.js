//filename where the code being executed
console.log(__filename, 'File name ')


//directory name that currently executing script resides in
console.log(__dirname)


//setTimeout to run callback after specified milli seconds
function findResult(){
    var length = 20;
    var breadth = 79;
    var result = length * breadth;
    console.log(result)
}
var t = setTimeout(findResult, 2000);

// clearTimeout used to clear or stop the timer created with setTimeout
clearTimeout(t);

function findDivideResult(){
    var divideResult = 10/5;
    console.log(divideResult)
}
var t = setInterval(findDivideResult, 2000)

clearInterval(t)


