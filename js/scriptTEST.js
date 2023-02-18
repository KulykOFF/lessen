let num = 5;
while (num < 11)
{console.log(num);
 num++;
}

for (let i = 20; i > 10; i--) {
    if (i === 13)
    {break;}
    console.log(i);
}


for (let i = 2; i < 11; i++) {
    if (i%2 === 1)
    {continue;}
    console.log(i);
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i <= 16) {   
    if (i%2 === 0)
    {i++; continue;}

     else 
     {console.log(i);}
     i++;    
}

const arrNumbers = [];
for (let i = 5; i < 11; i++)
{arrNumbers[i-5] = i;}
console.log(arrNumbers);

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++)
{result[i] = arr[i];}
console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++)

{
    if (typeof(data[i]) === `number`)
    {data[i] = data[i] * 2;}
        else
    if (typeof(data[i]) === `string`)
    {data[i] = `${data[i]} - done`;}

}
console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for (let i = 1; i <= data.length; i++)
{
   result[i-1] = data[data.length - i];
    
}
console.log(data);
console.log(result);
