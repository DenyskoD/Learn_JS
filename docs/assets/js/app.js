/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    } else {
        console.log("DB is private");
    }
}


function rememberMyFilms() {
    for (let i = 0 ; i < 2 ; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", "");
        let b = prompt("На сколько оцените его?", "");
    
        if( a == "" || a.length >= 50 || a == null || b.length == "" || b == null) {
            i--;
        } else {
            personalMovieDB.movies[a] = b;
        }
    }
}

function detectMovieLvl() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}



function writeYourGenres() {
    let genre;
    for( let i = 0 ; i < 3 ; i++) {
        genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
        personalMovieDB.genres.push(genre);
    }
}
// start();
// rememberMyFilms();
// writeYourGenres();
// detectMovieLvl();
// showMyDB();