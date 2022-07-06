import React from 'react'
import { Header, Card, Comment } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';


const Profile = () => {

    const { loading, data } = useQuery(QUERY_ME);
    const userData = data?.me || [];

    return (
        <div className='my-posts'>

            <Header as='h2' textAlign='center' id='post-header'>My Posts</Header>
            <Card centered fluid>
                <Card.Content>
                    <Header as="h2">Welcome {userData.username}</Header>
                    <Header as="h3">You can be contacted at {userData.email}</Header>
                    <br></br>
                    <Header as='h2'>Pet Name: Boo</Header>
                    <p>
                        Last seen outside my apartment. She is black, fluffy, and sassy. Do not chase,
                        she can run way faster than you. Please call my cell if spotted at XXX-XXX-XXX.
                    </p>
                    <Comment.Group id='comment'>
                        <Header as='h3' dividing>
                            Comments
                        </Header>

                        <Comment>
                            <Comment.Content>
                                <Comment.Author >Carl</Comment.Author>
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
        </div>
    )
};

export default Profile