const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            max: 50,
            unique: true,
            //ADD EMAIL VERIFY
        },
        password: {
            type: String,
            require: true,
            min: 4
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema);