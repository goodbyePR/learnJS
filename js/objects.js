"use strict";

// Пример объекта

let storeName = "Vladislav Store"
let storeDescription = {
    budget: 10000,
    employees: ['Vlad', 'Alex', 'Sveta'],
    products: {
        bread: 100,
        water: 50
    },
    open: true
};


// Задаёт вопрос при входе на страницу и записывает данные в объект


let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?'),
    answers = [];

answers[0] = prompt('Какой фильм был последний?');
answers[1] = prompt('На сколько его оцените по 10 шкале?');
answers[2] = prompt('Какой фильм был предпоследний?');
answers[3] = prompt('На сколько его оцените по 10 шкале?');

let personalMobieDB = {
        count: numberOfFilms,
        movies: {
            filmOne: answers[0] + ': ' + answers[1],
            filmTwo: answers[2] + ': ' + answers[3],
        },
        actors: {

        },
        genres: [],
        privat: false,
    };

    console.log(personalMobieDB);