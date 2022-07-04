const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentsSchema = new Schema (
    {
        commentsBody: {
            type:String, 
            required:true, 
            maxlength: 200
        },
        // username: {
        //     type:String,
        //     required:true, 
        // },
        createdAt: {
            type:Date, 
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters:true
        }
    }
);

module.exports = commentsSchema;