import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../utils/apolloClient";

export default function App({ Component, pageProps }) {
  const ApolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={ApolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
