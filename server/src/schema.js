const {gql} = require("apollo-server");
const typeDef = gql `
    #Type goes here

    type Query{
        # Get initiatives array for the main view
        initiativesForMain: [Initiative!]!
    }

    type Initiative {
        id: ID!
        name: String! 
        organization: Oraganization!
        description: String
        image: String

    } 

    type Organization{
        id: ID!
        name: String!
        website: String!
        image: String
    }


`;

module.exports = typeDefs;