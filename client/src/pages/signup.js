import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Signup = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        Sign up for a Lucky Duck account
      </Header>
      <Form size='large'>
        <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
            <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
            />

          <Button id='login' fluid size='large'>
            Signup
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? Log in here.
        {/* New user? <Link to="/signup">Sign Up</Link> */}
      </Message>
    </Grid.Column>
  </Grid>
)

export default Signup