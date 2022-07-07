import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PIN = gql`
  mutation addPin($description: String!) {
    addPin(description: $description) {
      _id
      description
      createdAt
      username
      comments {
        _id
      }
    }
  }
`;

export const ADD_COMMENTS = gql`
  mutation addComments($pinId: ID!, $commentsBody: String!) {
    addComments(pinId: $pinId, commentsBody: $commentsBody) {
      _id
      comments {
        _id
        commentsBody
        createdAt
        username
      }
    }
  }
`;

export const REMOVE_PIN = gql`
  mutation removePin($pinId: ID!) {
    removePin(pinId: $pinId) {
      _id
      username
      email
      pins {
        _id
        pinId
        description
      }
    }
  }

`;