import { FC } from 'react';
import Navigation from '@navigation/index';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// link to query creator 'https://graphql.pokeapi.co/v1beta2/console'
const client = new ApolloClient({
  uri: 'https://graphql.pokeapi.co/v1beta2',
  cache: new InMemoryCache(),
});

// Not a lot going on here - attaching the ApolloProvider to the app
// place to load cached resources
// place to initialize insights
const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
