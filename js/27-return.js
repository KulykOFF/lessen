'use strict'

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount)
{ return curr * amount;
 // недостижимы код
}

function promotion(result)
{console.log(result * discount);
 // return function() {}
}

promotion(convert(500, usdCurr));

// const res = convert(500, usdCurr);
// promotion(res);

// использование без значения

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

// функция всегда что то возращает, если мы не задали ничего, то это будет:
// undefinet ДОКАЗАТЕЛЬСТВО:

function doNothing() {};
console.log(doNothing() === undefined);