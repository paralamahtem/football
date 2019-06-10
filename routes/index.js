var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ФК Барселона' });
});

/* Страничка Месси */
router.get('/messi', function(req, res, next) {
  res.render('player', { title: 'Страничка Месси',
  picture: 'images/messi.jpg',
  desc:"Нападающий.Капитан команды." })
});

/* Страничка Суареса */
router.get('/suarez', function(req, res, next) {
  res.render('player', { title: 'Страничка Суареса',
  picture: 'images/suarez.jpg',
  desc:"Центральный нападающий" })
});

/* Страничка Коутиньо */
router.get('/coutinho', function(req, res, next) {
  res.render('player', { title: 'Страничка Коутиньо',
  picture: 'images/coutinho.jpg',
  desc:"Левый вингер" })
});

/* Страничка Тер Штегена */
router.get('/terstegen', function(req, res, next) {
  res.render('player', { title: 'Страничка Тер Штегена',
  picture: 'images/terstegen.jpg',
  desc:"Вратарь" })
});

/* Страничка Пике */
router.get('/pique', function(req, res, next) {
  res.render('player', { title: 'Страничка Пике',
  picture: 'images/pique.jpg',
  desc:"Центральный защитник" })
});

module.exports = router;
