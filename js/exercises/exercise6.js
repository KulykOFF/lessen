'use strict'

function sayHello(name) {
    return 'Hello, ${name}!';
}

sayHello('Anton');


function returnNeighboringNumbers(number)
{ 
    return [number - 1; number, number + 1];
}
returnNeighboringNumbers(10);


function getMathResult(num, koof) {
    if (typeof(koof) !== 'number' || koof <= 0)
    {return num;}

    let str = '';
    
    for (let k = 1; k <= koof; k++) {
        if (k === koof)
        {str += `${num * k}`;}
        else
        {str += `${num * k}---`;}
    }
    return str;
}

getMathResult (3,3);
console.log(getMathResult(4, 3));



