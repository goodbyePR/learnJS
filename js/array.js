"use strict";

// Данный код добавит последовательность числе от 5 до 10 включительно 
// в массив arrayOfNumber и выведет его в консоль

const arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    } 
    console.log(arrayOfNumbers);