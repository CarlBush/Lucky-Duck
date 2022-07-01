import React from "react";
import MapTracker from "../components/Map";
import PetList from "../components/PetList";

import { useQuery } from '@apollo/client';
import { QUERY_PINS } from '../utils/queries';

import { Grid } from 'semantic-ui-react'


const Home = () => {
    // useQuery hook 
    const { loading, data } = useQuery(QUERY_PINS);

    const pins = data?.pins || [];
    console.log(pins);

    return (
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                <div >
                <MapTracker></MapTracker>
                </div>
                </Grid.Column>
                <Grid.Column>
                <div >
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <PetList pins={pins} />
                    )}
                </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      );
}

export default Home;