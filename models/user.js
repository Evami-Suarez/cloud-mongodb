const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true
    },
    number: Number,
    age: Number,
    birthday: Date,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Users', userSchema);