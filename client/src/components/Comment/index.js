import React from 'react';
import {Comment, Header } from 'semantic-ui-react'

const Comments = function () {

    return (
        <div>
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
        </div>
    );
};

export default Comments;