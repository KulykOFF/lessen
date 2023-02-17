'use strict'

/*
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 5;
    // console.log(num);
}

showFirstMessage("Test global and local");
console.log(num);
*/

//Замыкание функций
let num = 20;

function showFirstMessage(text) {
    console.log(text);
// let num = 10;
// не обнаружит эту и ищет на уровень выше
    console.log(num);
    
}

showFirstMessage("Hello!");
console.log(num);


function calc(a, b)
{return (a + b);}
//return: возвращает значение во внешний мир

console.log(calc(5, 4));
console.log(calc(7, 9));

function ret() {
    let num = 50;
    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//funcstion declaration: function foo() {}
//создается до начала выполнения скрипта, можно вызвать перед обьявлением
function ret() {
    let num = 50;
    //

    return num;
}

// function expretion let foo = function() {}
// создаётся только тогда, когда доходит поток кода, можно вызвать только после обьявления.
const logger = function() {

    console.log("Hello");
};
logger();

// стрелочные функции () =>
// не имет своего контекста (this)
const calc = (a, b) => a + b;
const calc = (a, b) => {return a + b};
const calc = (a, b) => {
    console.log('1');
    return a + b
};

