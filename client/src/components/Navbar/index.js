import React from 'react';
import { Header } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';

import auth from '../../utils/auth';

const Navbar = () => {
//   const logout = event => {
//     event.preventDefault();
//     Auth.logout();
//   };

  return (
    <header >
      {/* <div >
        <Link to="/">
          <h1>Lucky Duck</h1>
        </Link>

        <nav >
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My Profile</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div> */}
      <Header as='h1'>
        Lucky Duck!
        </Header>
    </header>
  );
};

export default Navbar;