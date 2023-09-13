import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser(
    $userName: String
    $email: String
    $pasword: String
    $phoneNumber: String
  ) {
    addUser(
      userName: $userName
      email: $email
      pasword: $pasword
      phoneNumber: $phoneNumber
    ) {
      id
      userName
      email
      password
      phoneNumber
      dateTime
      date
    }
  }
`;
