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
        users: [User]
        user(username: String!): User
        pins(username: String): [Pin]
        pin(_id: ID!): Pin
    }
    
    type User {
        _id: ID
        username: String
        email: String
    }

    type Query {
        users:[User]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth       
    }
`;

module.exports = typeDefs;