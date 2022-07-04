const { User, Pin } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello World! This is a test?!';
        }
    }
};

// const resolvers = {
//     Query: {
//         me: async (parent, args, context ) => {
//             if (context.user) {
//                 const userData = await User.findOne({})
//                   .select('-__v -password')
//                   .populate('pets')
//                   .populate('pin');

//                 return userData;
//             }
//             throw new AuthenticationError('Not logged in!');
//         },
//         // get all users
//         users: async () => {
//             return User.find()
//               .select('-__v -password')
//               .populate('pets')
//               .populate('pin');
//         },
//         // get a user by username
//         user: async (parent, { username }) => {
//             return User.findOne({ username })
//               .select('-__v -password')
//               .populate('pets')
//               .populate('pin');
//         },
//         pins: async (parent, { username }) => {
//             const params = username ? { username } : {};
//             return Pin.find(params).sort({ createdAt: -1 });
//         },
//         pin: async (parent, { _id }) => {
//             return Pin.findOne({ _id });
//         }
//     },

//     Mutation: {
//         addUser: async (parent, args) => {
//             const user = await User.create(args);
//             const token = signToken(user);

//             return { token, user };
//         },
//         login: async (parent, { email, password }) => {
//             const user = await User.findOne({ email });

//             if (!user) {
//                 throw new AuthenticationError('Incorrect Credentials');
//             }

//             const correctPw = await user.isCorrectPassword(password);

//             if (!correctPw) {
//                 throw new AuthenticationError('Incorrect Credentials');
//             }

//             const token = signToken(user);
//             return { token, user };
//         },

//         addPin: async (parent, args, context) => {
//             if (context.user) {
//                 const pin = await Pin.create({...args, username: context.user.username });

//                 await User.findByIdAndUpdate(
//                     { _id: context.user._id },
//                     { $push: { pins: pin._id } },
//                     { new: true }
//                 );

//                 return pin;
//             }

//             throw new AuthenticationError('You need to be logged in');
//         },

//         addComments: async (parent, { pinId, commentsBody }, context) => {
//             if (context.user) {
//                 const updatedComments = await Pin.findOneAndUpdate(
//                     { _id: pinId },
//                     { $push: { comments: { commentsBody, username: context.user.username } } },
//                     { new: true, runValidators: true }
//                 );

//                 return updatedComments;
//             }

//             throw new AuthenticationError('You need to be logged in');
//         },

//         addPet: async (parent, { petId }, context) => {
//             if (context.user) {
//                 const updatedUser = await User.findOneAndUpdate(
//                     { _id: context.user._id },
//                     { $addToSet: { pets: petId } },
//                     { new: true }
//                 ).populate('pets')

//                 return updatedUser;
//             }

//             throw new AuthenticationError('You need to be logged in');
//         }
//     }
// };

module.exports = resolvers;