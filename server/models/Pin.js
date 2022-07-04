const { Schema, model } = require('mongoose');
const commentsSchema = require('./Comments');
const dateFormat = require('../utils/dateFormat');

const pinSchema = new Schema(
    {
        description
        username: {
            type: String,
            require: true,
        },
        lat: {
            type: Number,
            require: true
        },
        long: {
            type: Number,
            require: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Pin', pinSchema);