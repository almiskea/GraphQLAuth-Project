import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});
const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

export default client;
