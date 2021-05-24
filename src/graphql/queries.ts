import { gql } from '@apollo/client';


// Kind of GET request in REST API Integration
export const GET_USERS = gql`
    query {
        getUser {
            id
            username
            nickname
            genderId
            tagId
            birthYear
            longitude
            latitude
            city
            language
        }
    }
`;