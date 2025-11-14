"use strict";

// Место для первой задачи
function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i)
    }
}

// При помощи цикла for вывести числа от 20 до 10 в консоль. 
// В обратном порядке (20, 19, 18...). 
// Когда цикл дойдет до числа 13 - остановить весь цикл

// Место для второй задачи
function secondTask() {
    for (let i = 20; i > 10; i--) {
        if (i == 13) break;
        console.log(i)
    }
}

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// Место для третьей задачи
function thirdTask() {
    first: for (let i = 2; i < 11; i++) {
        if (i % 2) continue first;
        console.log(i) 
    }    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );
let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        continue;
    }
    i++;
}
console.log(i);



function fourthTask() {
    // Пишем решение вот тут
    
    
}

// Место для пятой задачи
const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;


function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i-5] = i;
    } 
    console.log(arrayOfNumbers)
    // Не трогаем
    return arrayOfNumbers;
}



