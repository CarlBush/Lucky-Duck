import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Home from './pages/home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

//establish link to graphql server
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

//constructor to instantiate apollo client instance --> create the connection to API endpoint
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Navbar></Navbar>
      <div>
      <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
      </Routes>
      </div>
      <Footer></Footer>
    </div>
    </ApolloProvider>
  );
}

export default App;
