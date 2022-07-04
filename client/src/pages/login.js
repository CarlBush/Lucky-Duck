import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

const Login = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        Login to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />

          <Button id='login' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New? Sign up here.
        <Link to="/signup">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default Login