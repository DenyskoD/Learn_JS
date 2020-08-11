/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
'use strict';

var personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function start() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  showMyDB: function showMyDB() {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else {
      console.log("DB is private");
    }
  },
  rememberMyFilms: function rememberMyFilms() {
    for (var i = 0; i < 2; i++) {
      var a = prompt("Один из последних просмотренных фильмов?", "");
      var b = prompt("На сколько оцените его?", "");

      if (a == "" || a.length >= 50 || a == null || b.length == "" || b == null) {
        i--;
      } else {
        personalMovieDB.movies[a] = b;
      }
    }
  },
  detectMovieLvl: function detectMovieLvl() {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  writeYourGenres: function writeYourGenres() {
    for (var i = 0; i < 3; i++) {
      var genre = prompt("\u0412\u0430\u0448 \u043B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 \u043F\u043E\u0434 \u043D\u043E\u043C\u0435\u0440\u043E\u043C ".concat(i + 1));

      if (genre == "" || genre == null) {
        i--;
      } else {
        personalMovieDB.genres.push(genre);
      }
    }

    personalMovieDB.genres.forEach(function (genre, i) {
      console.log("\u041B\u044E\u0431\u0438\u043C\u044B\u0439 \u0436\u0430\u043D\u0440 ".concat(i + 1, " - \u044D\u0442\u043E ").concat(genre));
    });
  },
  toggleVisibleMyDB: function toggleVisibleMyDB() {
    if (personalMovieDB.privat == true) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
}; // personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();
// personalMovieDB.detectMovieLvl();