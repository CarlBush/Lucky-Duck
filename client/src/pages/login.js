import React, { useState } from 'react'
//import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Grid, Header, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';


import Auth from '../utils/auth';

const Login = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await login({
  //       variables: { ...formState },
  //     });
  //     console.log(data);

  //     Auth.login(data.loginUser.token);
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   setFormState({
  //     email: '',
  //     password: '',
  //   });
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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setFormState({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div id='background'>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
          Login to your account
        </Header>

        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your login credentials!
          </Alert>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor='email' id='form-text'>Email</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your email'
              name='email'
              onChange={handleChange}
              value={formState.email}
              required
            />
            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor='password' id='form-text'>Password</Form.Label>
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
            disabled={!(formState.email && formState.password)}
            type='submit'
            variant='success'
            id='login'
            >
            Submit
          </Button>
        </Form>






        {/* <Form size='large' onSubmit={handleFormSubmit}>
        <Segment stacked>
          <Form.Input fluid icon='envelope' iconPosition='left' placeholder='E-mail address' onChange={handleChange} defaultValue={formState.email} />
          <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={handleChange} defaultValue={formState.password} />

          <Button id='login' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form> */}



        {error && <div>Login failed</div>}
        <Message id='message'>
          New?
          <Link to="/signup"> Sign up here</Link>
        </Message>
      </Grid.Column>
    </Grid>
    </div>
  )
}

export default Login