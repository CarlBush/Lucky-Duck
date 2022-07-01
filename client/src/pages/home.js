import React from "react";
import MapTracker from "../components/Map";
import PetList from "../components/PetList";

import { useQuery } from '@apollo/client';
import { QUERY_PINS } from '../utils/queries';

import { Grid } from 'semantic-ui-react'


export const pins = [
    {
        _id: 1,
        username: "Carl",
        pet: "SgtPeppers",
        contact: 5205205205,
        pinText: "please help",
        lat: 32.25,
        long: -110.97,
        createdAt: "06/30/2022"
    },
    {
        _id: 2,
        username: "Rod",
        pet: "ColSanders",
        contact: 4803942482,
        pinText: "HELPPP",
        lat: 33.4,
        long: -111.9,
        createdAt: "06/20/2022",
    },
    {
        _id: 3,
        username: "Madi",
        pet: "Meowzers",
        contact: 6231235432,
        pinText: "SOSSSSS",
        lat: 33.1,
        long: -111.5,
        createdAt: "05/13/2022"
    },

];

const Home = () => {

    // useQuery hook 
    const { loading, data } = useQuery(QUERY_PINS);

    //UNCOMMENT WHEN USING THE DATABASE
    //const pins = data?.pins || [];
    console.log(pins);

    return (
        <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                <div >
                <MapTracker pins={pins}></MapTracker>
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