const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        petCount: Int
        pins: [Pin]
        pets: [User]
    }

    type Pin {
        _id: ID
        description: String
        createdAt: String
        username: String
        image: String
        comments: [Comments]
    }

    type Comments {
        _id: ID
        commentsBody: String
        createdAt: String
        username: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        pins(username: String): [Pin]
        pin(_id: ID!): Pin
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPin(description: String!): Pin
        addComments(pinId: ID!, commentsBody: String!): Pin
        addPet(petId: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;