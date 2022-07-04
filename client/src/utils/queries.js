import { gql } from '@apollo/client';

export const QUERY_PINS = gql `
query pins($username: String) {
    pins(username: $username) {
        pinText
        pet
    }
}
`;