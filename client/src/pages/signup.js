import React, { useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
        Sign up for a Lucky Duck account
      </Header>
      <Form size='large' onSubmit={handleFormSubmit}>
        <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={handleChange} defaultValue={formState.username}/>
            <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' onChange={handleChange} defaultValue={formState.email}/>
            <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                defaultValue={formState.password}
                onChange={handleChange}
            />

          <Button id='login' fluid size='large'>
            Signup
          </Button>
        </Segment>
      </Form>
        {error && <div>Signup failed</div>}
      <Message>
        Already have an account?
        <Link to="/login">Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
  );
};

export default Signup