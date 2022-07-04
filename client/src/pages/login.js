import React, { useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data);

      Auth.login(data.loginUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        Login to your account
      </Header>
      <Form size='large' onSubmit={handleFormSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' onChange={handleChange} defaultValue={formState.email} />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={handleChange} defaultValue={formState.password} />

          <Button id='login' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      {error && <div>Login failed</div>}
      <Message>
        New? Sign up here.
        <Link to="/signup">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
)
}

export default Login