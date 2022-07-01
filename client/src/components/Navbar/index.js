import React , { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react'
// import { Link } from 'react-router-dom';

// import auth from '../../utils/auth';

export default class Navbar extends Component {
// //   const logout = event => {
// //     event.preventDefault();
// //     Auth.logout();
// //   };


// const items = [
//     { key: 'profile', name: 'Profile'},
//     { key: 'login', name: 'Login'},
//     { key: 'signup', name: 'Signup'}
// ]

// const Navbar = () => <Menu items={items} />

// export default Navbar;

state = {}

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

render() {
const { activeItem } = this.state

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
      <Header as='h1' textAlign='center'>
      {/* <Image circular src='/favicon.ico' size='mini' /> */}
        Lucky Duck
        </Header>
        <Menu pointing secondary>
            <Menu.Menu position='right'>
                <Menu.Item
                name='Profile'
                active={activeItem === 'Profile'}
                onClick={this.handleItemClick}
                >
                    Profile
                </Menu.Item>
                <Menu.Item
                name='Login'
                active={activeItem === 'Login'}
                onClick={this.handleItemClick}
                >
                    Login
                </Menu.Item>
                <Menu.Item
                name='Signup'
                active={activeItem === 'Signup'}
                onClick={this.handleItemClick}
                >
                    Signup
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </header>
  );
}
};