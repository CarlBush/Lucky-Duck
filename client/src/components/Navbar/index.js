import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

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

                <Menu tabular fluid stackable size='massive'>
                    <Menu.Header as='h1' only='widescreen' id='lucky'>
                        Lucky Duck

                    </Menu.Header>

                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='Home'
                            active={activeItem === 'Home'}
                            onClick={this.handleItemClick}
                        >
                            <Link to="/">Home</Link>
                        </Menu.Item>




                        {Auth.loggedIn() ? (
                            <>
                                <Menu.Item
                                    name='Profile'
                                    active={activeItem === 'Profile'}
                                    onClick={this.handleItemClick}
                                >
                                    <Link to="/profile">Profile</Link>
                                </Menu.Item>

                                <Menu.Item
                                    name='Logout'
                                    active={activeItem === 'Logout'}
                                    onClick={Auth.logout}
                                >
                                    <Link to="/">Logout</Link>
                                </Menu.Item>
                            </>
                        ) : (
                            <>
                                <Menu.Item
                                    name='Login'
                                    active={activeItem === 'Login'}
                                    onClick={this.handleItemClick}
                                >
                                    <Link to="/login">Login</Link>
                                </Menu.Item>
                                <Menu.Item
                                    name='Signup'
                                    active={activeItem === 'Signup'}
                                    onClick={this.handleItemClick}
                                >
                                    <Link to="/signup">Signup</Link>
                                </Menu.Item>
                            </>
                        )}

                    </Menu.Menu>
                </Menu>
            </header>
        );
    }
};