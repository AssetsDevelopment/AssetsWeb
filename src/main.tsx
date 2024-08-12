import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { JournalApp } from './JournalApp.tsx';

import './styles.css';
import theme from './config/theme/theme.ts';


import { AuthProvider } from './app/modules/auth/context';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from './app/common/components/SnackbarContext.ts';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const uriAPI = import.meta.env.VITE_API_REST_URL;

const httpLink = createHttpLink({
  uri: uriAPI,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth-token');
  const tokenWithoutQuotes = token?.replace(/"/g, ''); // Elimina las comillas
  const bearerToken = `Bearer ${tokenWithoutQuotes}`;

  return {
    headers: {
      ...headers,
      authorization: token ? bearerToken : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <SnackbarProvider>
            <JournalApp />
          </SnackbarProvider>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </ApolloProvider>
);

