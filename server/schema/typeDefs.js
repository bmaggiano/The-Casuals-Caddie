const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Query {
        me: User
        clubs(_id: ID, clubId: Int, clubName: String, clubAverage: Int, clubHigh: Int, clubLow: Int, dateTested: String): [Club]
    }

    type User {
        _id: ID
        username: String
        email: String
        clubs: [Club]
    }

    type Club {
        _id: ID
        clubId: Int
        clubName: String
        clubAverage: Int
        clubHigh: Int
        clubLow: Int
        dateTested: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String, email: String, password: String): Auth
        addDistance(clubAverage: Int): User
        # addDistance(_id: ID, clubAverage: Int): User
        addClub(clubName: String): User
        removeClub(_id: ID): User
    }
`;

module.exports = typeDefs;
