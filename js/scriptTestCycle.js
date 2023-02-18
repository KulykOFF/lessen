'use strict'

/*
let num = 10;
while (num < 14);
{console.log(num);
num++;
}
*/



/*
let num = 10;
do {
    console.log(num);
    num++;
}
while (num < 18);
*/

/*
let num = 30;
for (let i = 1; i <= 4; i++)
{console.log(num);
num=num+2;}
*/
/*
let num = 30;
for (let i = 1; i <= 6; i++)
{ if (i === 3 )
    {break;}
    console.log(i);
    console.log(num);
    num = num + 2;
}
*/
/*
let result = '';
const length = 9;
for (let i = 1; i < length; i++){
    for (let j =0; j < i; j++) {
        result += '*';
    }
    result +='\n';
}

console.log(result)
*/

 /*
 first: for (let i = 1; i < 3; i++){
            console.log(`First level: ${i}`);
            for (let j =0; j < 3; j++) {
                console.log(`Second level: ${j}`);
                for (let k = 0; k < 3; k++) {
                    if (k === 2) continue first;
                    console.log(`Third level: ${k}`);
                }
            }
        }
*/

/*
const arrOfNum = [];
for (let i = 5; i < 11; i++)
{ arrOfNum [i-5] = i;}
console.log(arrOfNum);
//return arrOfNum;
*/

/*
for (let i = 2; i < 16; i++)
{if (i % 2 === 0)
{continue;}
else
{console.log(i);}
}
*/

let i = 2;
while (i <= 16)
{if (i % 2 === 0)
{i++; continue;}
else
{console.log(i);}
i++;
}