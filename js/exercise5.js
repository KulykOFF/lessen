"use strict"

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 1; j <= lines - i; j++) {
        result += " ";
    }
    for (let j = 1; j <= 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)