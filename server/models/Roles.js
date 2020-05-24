const {Schema, model, Types} = require('mongoose');

let doctorSchema = new Schema({
    doctor: true,
    pacient: true
});

module.exports = model('DoctorSchedule', doctorSchema);