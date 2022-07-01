import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const Footer = () => {
  return (
    <footer>
      <div>
        <Button color='facebook' size='mini'>
            <Icon name='facebook' /> Facebook
        </Button>
        <Button color='twitter'size='mini'>
            <Icon name='twitter' /> Twitter
        </Button>
        &copy;{new Date().getFullYear()} by Carl Bush, Rodrigo Valencia and Madi Milner
      </div>
    </footer>
  );
};

export default Footer;