"use strict";

let num = 50;

while (num < 55) { // пока num меньше 50, выполняем действие в {}
    console.log(num); // выводим значение num
    num++; // прибавляем 1 еденицу каждый круг цикла
}

let num1 = 50;

do {
    console.log(num1);
    num1++; 
}
while (num1 < 55);



// ----------------------
// БЛОК ЦИКЛ ВНУТРИ ЦИКЛА
// ----------------------

let result = '';
const length = 7;

for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++)
        result += '*';

    result += '\n';
}

console.log(result);


//====================================
// ДОПОЛНИТЕЛЬНАЯ ИНФА ПО ЦИКЛАМ И ВЛОЖЕННЫМ ЦИКЛАМ
// ===================================

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`)
    for (let j = 0; j < 3; j++) {
        console.log(`Secong level: ${j}`)
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`)
    }
    }
}