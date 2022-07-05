import React, { useState } from 'react'
//import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Grid, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addUser({
  //       variables: { ...formState },
  //     });
  //     console.log(data);
  //     Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
          Sign up for a Lucky Duck account
        </Header>


        {/* <Form size='large' onSubmit={handleFormSubmit}>
        <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={handleChange} defaultValue={formState.username}/>
            <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' onChange={handleChange} defaultValue={formState.email}/>
            <Form.Input fluidicon='lock' iconPosition='left' placeholder='Password' type='password' defaultValue={formState.password} onChange={handleChange}/>

          <Button id='login' fluid size='large'>
            Signup
          </Button>
        </Segment>
      </Form> */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {/* show alert if server response is bad */}
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something Went Wrong!
          </Alert>
          <Form.Group>
            <Form.Label htmlFor='username'>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your username'
              name='username'
              onChange={handleChange}
              value={formState.username}
              required
            />
            <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Your email address'
              name='email'
              onChange={handleChange}
              value={formState.email}
              required
            />
            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Your password'
              name='password'
              onChange={handleChange}
              value={formState.password}
              required
            />
            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
          </Form.Group>
          <Button
            disabled={!(formState.username && formState.email && formState.password)}
            type='submit'
            variant='success'>
            Submit
          </Button>
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