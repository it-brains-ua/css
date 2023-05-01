// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  res.render('index', {
    pagetitle: 'Practic 1',
    layout: 'default',
  })
})

router.get('practic_2', function (req, res) {
  res.render('practic_2', {
    pagetitle: 'Practic 2',
    layout: 'default',
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
