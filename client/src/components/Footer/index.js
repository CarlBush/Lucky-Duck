import React from 'react';
import { Button, Icon, Container } from 'semantic-ui-react'

const Footer = () => {
  return (
    <footer>
      <Container textAlign='right'>
        <Button color='facebook' size='mini'>
            <Icon name='facebook' /> Facebook
        </Button>
        <Button color='twitter'size='mini'>
            <Icon name='twitter' /> Twitter
        </Button>
        {/* &copy;{new Date().getFullYear()} by Carl Bush, Rodrigo Valencia and Madi Milner */}
      </Container>
    </footer>
  );
};

export default Footer;