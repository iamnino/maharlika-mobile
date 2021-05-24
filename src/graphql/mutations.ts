import { gql } from '@apollo/client';

// Kind of POST request in REST API Integration
export const AUTH_WITH_FB = gql`
    mutation authWithFacebook($accessToken: String!) {
        authWithFacebook(accessToken: $accessToken) {
            facebookId
            isCompleted
        }
    }
`;

// export const CREATE_USER_WITH_FB = gql`
//     mutation createUserWithFacebook($username: String!) {
//         createUserWithFacebook(accessToken: $accessToken) {
//         }
//     }
// `;