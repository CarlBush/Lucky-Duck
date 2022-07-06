import React from "react";
import { Container, Header } from 'semantic-ui-react';
import MapTracker from "../components/Map";
import { useQuery } from '@apollo/client';
import { QUERY_PINS } from "../utils/queries";



const Home = () => {

    // useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_PINS);
    
    const pins = data?.pins || [];
    console.log(pins);


    return (
        <div className='home'>
                <Container textAlign='center' id='about'>
                    <Header as='h2'>About Us</Header>
                    <p>
                        At Lucky Duck, pets are family. We built an application to make looking for your lost pet a little 
                        easier. Create an account to share your pet info and let the Lucky Duck community be an extra set of eyes
                        to bring your pet home. We hope all our users are lucky ducks and they are able to reunite with their furry friends--
                        whether they be a pup, cat, or maybe even a duck!
                    </p>
                </Container>


                <MapTracker ></MapTracker>
        </div>
    );
}

export default Home;