const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const bcrypt = require('bcrypt')

const router = new Router()

router.post(
    '/register',
    [
    check('nickname', 'Минимальная длина  символ').isLength({min: 20}),
    check('email', 'Некоректный email').isEmail(),
    check('password', 'Минимальная длина 6 символов').isLength({min: 6})

], async (req, res) => {
 try {
  const errors = validationResult(req)

  if (!errors.isEmpty()){
   return res.status(400).json({
    errors: errors.array(),
    message: 'Не коректные данные при регистрации'
   })
  }
  const {nickname, age, email, password} = req.body
  const candidateNick = await User.findOne({nickname})
  const candidateEmail = await User.findOne({email})

  if (candidateNick){
   return res.status(400).json('Такой ник уже занят')
  }
  if (candidateEmail){
   return res.status(400).json('Такой пользователь уже существует')
  }

  const hashedPassword = await bcrypt.hash(password, 12)
  const user = new User({nickname,age,email, password: hashedPassword})
   await user.save()

  res.status(201).json({message: "Пользователь создан"})
 }catch (e) {
 res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
 }

})

router.post('/login', async (req, res) => {

})

module.exports = router