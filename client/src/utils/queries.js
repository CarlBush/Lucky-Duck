import { gql } from '@apollo/client';

export const QUERY_PINS = gql`

    query pins($username: String) {
        pins(username: $username) {
            _id
            description
            createdAt
            username
            comments {
                _id
                createdAt
                username
                commentsBody
            }
        }
    }
`;

export const QUERY_PIN = gql`
    query pin($id: ID!) {
      pin(_id: $id) {
        _id
        description
        createdAt
        username
        comments {
          _id
          createdAt
          username
          commentsBody
        }
      }
    }
`;
// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       petCount
//       pets {
//         _id
//         username
//       }
//       pins {
//         _id
//         description
//         createdAt
//       }
//     }
//   }
// `;




export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      
      pins {
        _id
        description
        createdAt
        comments {
          _id
          createdAt
          commentsBody
          username
        }
      }
      pets {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      petCount
      pets {
        _id
        username
      }
    }
  }
`;