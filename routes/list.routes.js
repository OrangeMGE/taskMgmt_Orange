const {Router} = require('express');
const config = require('config');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();
const auth = require('../middleware/auth.middleware.js')

router.post(
    '/reqlists', 
    async (req, response) => {
        try {
            const {username, password} = req.body
            const user = await User.findOne({ username })


        } catch(e) {
            console.log(e)
            response.status(500).json({ "message": 'Что-то пошло не так' });
        }
    })
module.exports = router;