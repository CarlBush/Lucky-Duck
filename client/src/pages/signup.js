import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

const SignUpForm = () => (
    <Grid centered columns>
        <Form>
            <Form.Field>
                <label>User Name</label>
                <input placeholder='User Name' />
            </Form.Field>
            <Form.Field>
                <label>Email</label>
                <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    </Grid>
)

export default SignUpForm