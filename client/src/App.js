// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Home from './pages/home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/login';
import './index.css';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

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
        <Home></Home>
      </div>
      <Footer></Footer>
    </div>
    </ApolloProvider>
  );
}

export default App;
