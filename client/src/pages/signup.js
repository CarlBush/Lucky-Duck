import React, { useState } from 'react'
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
    <div id='background'>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' id='card'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
          Sign up for an account
        </Header>

        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {/* show alert if server response is bad */}
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something Went Wrong!
          </Alert>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label htmlFor='username' id='form-text'>Username:</Form.Label>
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor='email' id='form-text'>Email:</Form.Label>
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

          <Form.Group className="horizontal mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor='password' id='form-text'>Password:</Form.Label>
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
            variant='success'
            id='login'
            >
            Submit
          </Button>
        </Form>

        {error && <div>Signup failed</div>}
        <Message id = 'message'>
          Already have an account? 
          <Link to="/login"> Login here.</Link>
        </Message>
      </Grid.Column>
    </Grid>
    </div>
  );
};

export default Signup