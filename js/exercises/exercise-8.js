'use strict'
// объявляем функцию
function getTimeFromMinutes(minutesTotal) {
// проверяем введённое значение в переменную на соответсвие (тип данных) равно число  И положительное И целое
// если хоть 1 не правда возвращаем строку:
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || minutesTotal > 1440 || !Number.isInteger(minutesTotal) ) {
        return "Ошибка, проверьте данные";
    }
// объявили 2 переменные часы= ; минуты = 125/60 остаток от деления
    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;
// задали переменную строковую для получения согласно перебору
    let hoursStr = '';
// условие перебор
    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180)
console.log(getTimeFromMinutes(1265));
