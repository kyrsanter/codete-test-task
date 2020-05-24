/*========= for clients ============*/

const {Schema, model, Types} = require('mongoose');

let AppointmentSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    pacientId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
});

module.exports = model('Appointment', AppointmentSchema);