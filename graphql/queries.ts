import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users {
    users {
      id
      userName
      email
      password
      phoneNumber
    }
  }
`;

export const GET_USER = gql`
  query Users($id: ID!) {
    users(id: $ID) {
      id
      userName
      email
      password
      phoneNumber
    }
  }
`;
