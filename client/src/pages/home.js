import React from "react";
import MapTracker from "../components/Map";



const Home = () => {

    // useQuery hook 


    //UNCOMMENT WHEN USING THE DATABASE
    //const pins = data?.pins || [];


    return (

        <div >
            <MapTracker></MapTracker>
        </div>
    );
}

export default Home;