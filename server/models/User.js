const {Schema, model, Types} = require('mongoose');

let userChema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    doctor: {
        type: Boolean,
        required: true
    },
    pacient: {
        type: Boolean,
        required: true
    }
});



module.exports = model('User', userChema);