export const typeDefs = `#graphql

type User {
    id : ID!
    userName:    String
    email    :   String
    password  :  String
    phoneNumber: String
}


type Query{
    user(id : ID!) :User
    users : [User]
}

type Mutation {
    addUser(id : ID!, userName : String, email : String , pasword : String, phoneNumber : String) : User
}

`;
