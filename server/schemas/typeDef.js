const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: Id
        username: String
        email: String
        petCount: Int
        pins: [Pin]
        pets: [User]
    }

    type Pin {
        _id: Id
        pinText: String
        createdAt: String
        username: String
        commentsCount: Int
        comments: [Comments]
    }

    type Comments {
        _id: Id
        commentsBody: String
        createdAt: String
        username: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        pins(username: String): [Pin]
        pin(_id: Id!): Pin
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPin(pinText: String!): Pin
        addComments(pinId: Id!, commentsBody: String!): Pin
        addPet(petId: Id!): User
    }

    type Auth {
        token: Id!
        user: User
    }
`;

module.exports = typeDefs;