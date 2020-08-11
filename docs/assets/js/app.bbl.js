/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
'use strict';

var numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

var personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true
};

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  } else {
    console.log("DB is private");
  }
}

function rememberMyFilms() {
  for (var i = 0; i < 2; i++) {
    var a = prompt("Один из последних просмотренных фильмов?", "");
    var b = prompt("На сколько оцените его?", "");

    if (a == "" || a.length >= 50 || a == null || b.length == "" || b == null) {
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
  var genre;

  for (var i = 0; i < 3; i++) {
    genre = prompt("\u0412\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C ".concat(i + 1));
    personalMovieDB.genres.push(genre);
  }
} // start();
// rememberMyFilms();
// writeYourGenres();
// detectMovieLvl();
// showMyDB();