const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true
    },
    number: Number,
    age: Number,
    birthday: Date,
    hours: Date,
    time: {
        arrival: String,
        departure: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const user = mongoose.model('Users', userSchema);
module.exports = user;