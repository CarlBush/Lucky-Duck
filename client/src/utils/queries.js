import { gql } from '@apollo/client';

export const QUERY_PINS = gql `

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