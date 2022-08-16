import { 
   InMemoryCache,
   ApolloClient,
   HttpLink
 } from '@apollo/client';

 const client = new ApolloClient({
   link: new HttpLink({
     uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
   }),
   cache: new InMemoryCache(),
 });
