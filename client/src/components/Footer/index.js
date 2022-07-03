import React from 'react';
import { Button, Icon, Container, Segment} from 'semantic-ui-react'

const Footer = () => {

  return (
    <footer>
                <Container fluid id='footer'>
                    <Button color='facebook' floated='right' size='mini'>
                        <Icon name='facebook' /> Facebook
                    </Button>
                    <Button color='twitter' floated='right' size='mini'>
                        <Icon name='twitter' /> Twitter
                    </Button>
                    <Button color='instagram' floated='right' size='mini'>
                        <Icon name='instagram' /> Instagram
                    </Button>
                </Container>
    </footer>
  );
};

export default Footer;