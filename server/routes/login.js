const {Router} = require('express');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const config = require('../config/config');


const router = new Router;

router.post('/signup', [
    check('email').trim().isEmail().withMessage('Invalid email'),
    check('name').trim().isLength({min: 3}).withMessage('Name cannot be empty or less than 3 characters long'),
    check('phone').matches(/^(?:\+38)?0[36957]{1}[3671248]{1}[0-9]{7}$/).withMessage('The phone number must start at +380 or 0'),
    check('password').trim().isLength({min:3}).withMessage('Password cannot be empty or less than 3 characters long'),
], async (request, response) => {
    //registration
    const validationErrors = validationResult(request);
    if (!validationErrors.isEmpty()) {
        console.log(validationErrors)
    }
    try {
        let {name, phone, password, email, isDoctor} = request.body;
        let candidate = await User.findOne({ email });
        if (!candidate) {
            let cryptedPass = bcrypt.hashSync(password, 10);
            const user = new User({
                name,
                email,
                phone,
                password: cryptedPass,
                doctor: isDoctor ? true : false,
                pacient: isDoctor ? false : true,
                // role: isDoctor ? 'doctor' : 'pacient',
                // doctorsSchedule: isDoctor ? data.items = [] : null,
            });
            user.save();
            return response.status(201).json({allisOk: 'ok'})
        }
        else {
            //send error that user created already
        }
    }
    catch(err) {
        console.log(err)
    }

});

router.post('/signin', async (request, response) => {
    let {email, password} = request.body;

    let candidate = await User.findOne({email});
    if (!candidate) {
        console.log('user not found')
        //send error that user not found
    }
    bcrypt.compare(password, candidate.password, (err, result) => {
        if (!result) {
            console.log('wrong pass')
            //send error wrong user data
        }
        let token = jwt.sign({userId: candidate._id}, config.jwtSecret, {expiresIn: '10d'});
        response.json({token})
    })
});


module.exports = router;


