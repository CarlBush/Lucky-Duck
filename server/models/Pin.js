const { Schema, model } = require('mongoose');
const commentsSchema = require('./Comments');
const dateFormat = require('../utils/dateFormat');

const pinSchema = new Schema(
    {
        description: {
            type: String,
            required: 'You need to add a description',
            minlength: 1,
            maxlength: 300
        },
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
        },
        comments: [commentsSchema]
    },
    {
        toJSON: {
            getters: true
        },
        // timestamps: true
    }
);

const Pin = model('Pin', pinSchema);
module.exports = Pin;