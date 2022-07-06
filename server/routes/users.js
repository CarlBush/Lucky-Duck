// const router = require("express").Router();
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

// //REGISTER
// //http://localhost:8800/api/users/register
// router.post("/register", async (req, res) => {
//     try {
//         //generate new password
//         const salt = await bcrypt.genSalt(10);
//         //hash password
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);
//         //create new user
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: hashedPassword
//         });
//         //save user and send response
//         const user = await newUser.save();
//         res.status(200).json(user._id)

//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// //LOGIN
// //http://localhost:8800/api/users/login
// router.post("/login", async (req, res) => {
//     try {
//         //find user
//         const user = await User.findOne({ username: req.body.username });
//         //If username is incorrect send below
//         !user && res.status(400).json("Wrong Username or PasswordL");

//         //validate password
//         const validPassword = await bcrypt.compare(req.body.password, user.password);
//         //If password is incorrect send below
//         !validPassword && res.status(400).json("Wrong Username or PasswordP");

//         //send status
//         res.status(200).json({ _id: user.id, username: user.username });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// })


// module.exports = router