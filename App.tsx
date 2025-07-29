import { FC } from 'react';
import Navigation from '@navigation/index';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.pokeapi.co/v1beta2',
  cache: new InMemoryCache(),
});

const App: FC = () => {
  // load cached resources
  // initialize insights
  // high level providers & wrappers
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
