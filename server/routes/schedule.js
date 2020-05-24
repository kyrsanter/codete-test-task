const {Router} = require('express');
const Schedule = require('../models/DocSchedule');
const User = require('../models/User');
const router = new Router;

router.get('/doctor/:id', async (request, response) => {
    try {
        let doctorsSchedule = await Schedule.find().where({doctorId: request.params.id});
        if (doctorsSchedule.length === 0) {
            //res empty
        }
        else {
            response.json(doctorsSchedule)
        }
    }
    catch(err) {
        console.log(err)
    }
});

router.post('/add/:id', async (request, response) => {
    try {
        let {date, timeFrom, timeTo, patientsCount} = request.body;
        let obj = {
            date,
            time: {
                from: timeFrom,
                to: timeTo,
            },
            patientsCount,
            doctorId: request.params.id,
            patientsIdArray: []
        };
        let docSchedule = await new Schedule(obj);
        await docSchedule.save();
        let doctorsSchedule = await Schedule.find().where({doctorId: request.params.id});
        if (doctorsSchedule.length === 0) {
            //res empty
        }
        else {
            response.json(doctorsSchedule)
        }
    }
    catch(err) {
        console.log(err)
    }
});

module.exports = router;
