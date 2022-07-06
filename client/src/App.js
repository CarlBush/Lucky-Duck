import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Home from './pages/home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SignUp from './pages/signup';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Profile from './pages/profile';
import { setContext } from '@apollo/client/link/context';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

//establish link to graphql server
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//constructor to instantiate apollo client instance --> create the connection to API endpoint
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <div className="App">
            <Navbar></Navbar>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
            <Footer></Footer>
          </div>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
