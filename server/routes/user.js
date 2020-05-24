const {Router} = require('express');
const User = require('../models/User');

const router = new Router;

router.get('/all', async (request, response) => {
    //only doctors
    try {
        let candidates = await User.find().where({doctor: true}).select('-password -pacientAppointments -doctor -pacient');
        if (candidates.length === 0) {
            return response.status(404) //add empty message
        }
        return response.status(200).json(candidates)
    }
    catch (error) {
        console.log(error)
        //send error message
    }
});

router.get('/:id', async (request, response) => {
    try {
        let id = request.params.id;
        let candidate = await User.findById(id).select('-password');
        if (!candidate) {
            // user not found
        }
        return response.status(200).json(candidate)
    }
    catch (error) {
        console.log(error)
        //send error message
    }

});

module.exports = router;