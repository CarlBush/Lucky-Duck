const { User, Pin } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        pins: async (parent, {username}) => {
            const params = username ? {username} : {};
            return Pin.find().sort({ createdAt: -1 });
        },

        pin: async (parent, {_id}) => {
            return Pin.findOne({ _id });
        },

        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('pets')
            .populate('pins');
        },

        // get single user by username
        user: async (parent, {username}) => {
            return User.findOne({username})
            .select('-__v -password')
            .populate('pets')
            .populate('pins');
        },
        users: async () => {
            return User.find();
        }
    },
    Mutation: {

        addUser: async function (parent, args) {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user }
        },

        login: async function (parent, { email, password }) {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials (email)");
            }

            // const correctPw = await user.isCorrectPassword(password);

            // if (!correctPw) {
            //     throw new AuthenticationError("Incorrect credentials (password)");
            // }

            

            const token = signToken(user);
            return { token, user };
        }
    }
};



module.exports = resolvers;