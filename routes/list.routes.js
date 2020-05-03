const {Router} = require('express');
const config = require('config');
const User = require('../models/User');
const router = Router();

router.post(
    '/required', 
    async (req, response) => {
        try {
            console.log('req.body: ', req.body) //Убрать потом
            const {userId} = req.body
            const user = await User.findOne({ userId })

            console.log('Пользователь найден, проверяю листы задач')
            console.log(user);

            response.status(200).json({ message: user.lists})
        } catch(e) {
            console.log(e)
            response.status(500).json({ "message": 'Что-то пошло не так' });
        }
    })
module.exports = router;