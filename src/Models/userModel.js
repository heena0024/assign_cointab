const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        min: 8,
        max: 15,
    },
    confirmPassword: {
        type: String,
        min: 8,
        max: 15,
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)