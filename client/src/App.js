import { useEffect } from 'react';
import { gapi } from 'gapi-script'
import Home from './pages/home'
import About from './pages/about'
import TourDistances from './pages/averageDistance'
import Profile from './pages/profile'
import Signup from './components/signupForm'
import Edit from './pages/edit';
import { setContext } from '@apollo/client/link/context';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import Navbar from './components/navbar.js'
import './App.css';

const clientId = "1004159162833-2avgpkanfd1tfvsc9n2dit03l5qrpd6a.apps.googleusercontent.com"

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {


  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start)
  })


  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TourDistances' element={<TourDistances />} />
          <Route path='/About' element={<About />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Edit/:Clubs' element={<Edit />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
