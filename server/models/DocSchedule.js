/*========= for doctors ============*/

const {Schema, model} = require('mongoose');

let doctorSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        from: {
            type: Date,
            required: true
        },
        to: {
            type: Date,
            required: true
        }
    },
    patientsCount: {
        type: Number,
        required: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    patientsIdArray: [
        {
            pacientId: {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            }
        }
    ]
});

doctorSchema.methods.addNewRecord = function(record) {
    this.data.config.push(record);
};


module.exports = model('DoctorSchedule', doctorSchema);

//
// <TextField
// onChange={handleChange}
// id="standard-basic"
// className={classes.input}
// label="How many patients" />