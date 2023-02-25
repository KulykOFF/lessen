'use strict'

const str = "test";
const arr = [1, 2, 4];

console.log(str.length);

// все методы в официальной документации и в браузере(консоль)
// console.dir(Number);

console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let fruit = "Some fruit"
console.log(fruit.indexOf("fruit"));

 const logg = "Hello world!";
// console.log(logg.indexOf("rld"));
// console.log(logg.slice(8, 11));
//console.log(logg.slice(-6, -1));
//console.log(logg.substring(8, 11));
console.log(logg.substr(8, 3));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

if (year == 2015) {
    alert( "Правильно!" );
    alert( "Вы такой умный!" );
  }
