import React from 'react'
import {  Grid, Icon, Header, Button, Card, Modal, Input, Form, Comment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [open, setOpen] = React.useState(false)

    return (
    <Grid stackable>
            <Grid.Column width={8} id='profile'>
                <Header as='h2'>
                    <Icon name='user circle' />
                    Username
                </Header>

                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button id='profile-button' size='large'>Find Lost Pet</Button>}
                    >
                    <Modal.Header>Need Help Finding Your Pet?</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                        <p>
                            Please fill out the information below to post your lost pet and let the Lucky Duck Community aid 
                            you in your search. Include your pet's name, your city and state, specific area your pet was last 
                            seen, how you'd like to be contacted if spotted, and any other important details (is your pet skittish, 
                            friendly, etc.).
                        </p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Form>
                            <Form.Field>
                                <Input focus placeholder='Pet Name...' />
                            </Form.Field>
                            <Form.Field>
                                <Input focus placeholder='City, State (i.e. Phoenix, AZ)' />
                            </Form.Field>
                            <Form.Field>
                                <Input focus placeholder='Description...'  />
                            </Form.Field>
                            <Button
                            content="Share pet post"
                            labelPosition='right'
                            icon='checkmark'
                            id='share'
                            onClick={() => setOpen(false)}
                            positive
                            />
                        </Form>
                    </Modal.Actions>
                    </Modal>

            </Grid.Column >

            <Grid.Column width={8} id='my-post'>
                <Header as='h2'>My Posts</Header>
                <Card fluid>
                    <Card.Content>
                        <Header as='h2'>Boo</Header>
                        <p>
                            Last seen outside my apartment. She is black, fluffy, and sassy. Do not chase, 
                            she can run way faster than you. Please call my cell if spotted at XXX-XXX-XXX.
                        </p>
                     <Comment.Group>
                        <Header as='h3' dividing>
                        Comments
                        </Header>

                        <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'>Carl</Comment.Author>
                            <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>I live near there, I'll let you know if I see her!</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        </Comment>

                        <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'>Sarah</Comment.Author>
                            <Comment.Metadata>
                            <div>Yesterday at 12:30AM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                            <p>Poor Boo! I'll keep my eyes out for her</p>
                            </Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        <Comment.Group>
                            <Comment>
                            <Comment.Content>
                                <Comment.Author as='a'>Rodrigo</Comment.Author>
                                <Comment.Metadata>
                                <div>Just now</div>
                                </Comment.Metadata>
                                <Comment.Text>:( :( :(</Comment.Text>
                                <Comment.Actions>
                                <Comment.Action>Reply</Comment.Action>
                                </Comment.Actions>
                            </Comment.Content>
                            </Comment>
                        </Comment.Group>
                        </Comment>

                        <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'>Boris</Comment.Author>
                            <Comment.Metadata>
                            <div>5 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Dude, this is so sad.</Comment.Text>
                            <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                        </Comment.Content>
                        </Comment>
                    </Comment.Group>
                    </Card.Content>
                </Card>
            </Grid.Column>
    </Grid>
)
};

export default Profile