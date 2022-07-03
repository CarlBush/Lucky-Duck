import React , { Component } from 'react';
import { Header, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

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
    <header className='nav'>

        <Menu pointing secondary size='massive'>
            <Menu.Item>
                <Header as='h1' id='lucky'>
                    Lucky Duck
                </Header>
            </Menu.Item>

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
                    {/* <Link to="/login">Login</Link> */}
                </Menu.Item>
                <Menu.Item
                name='Signup'
                active={activeItem === 'Signup'}
                onClick={this.handleItemClick}
                >
                    {/* <Link to="/signup">Signup</Link> */}
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    </header>
  );
}
};