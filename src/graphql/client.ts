import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';


const errorLink = onError(({ graphqlErrors, networkError}: any) => {
    if(graphqlErrors) {
        graphqlErrors.map(({ message, location, path }: any) => {
            console.warn(`Graphql Error ${message}`)
        })
    }

    if(networkError){
        console.warn(`Graphql Network Error ${networkError}`);
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: process.env.API_URL})
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
});

export default client;