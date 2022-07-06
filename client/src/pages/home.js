import React from "react";
import MapTracker from "../components/Map";
import { useQuery } from '@apollo/client';
import { QUERY_PINS } from "../utils/queries";



const Home = () => {

    // useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_PINS);
    
    const pins = data?.pins || [];
    console.log(pins);

    return (

        <div >
            <MapTracker></MapTracker>
        </div>
    );
}

export default Home;