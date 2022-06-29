import "./map.css"
import * as React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { useState } from "react";


const MapTracker = function () {

    const [viewPort, setViewport] = useState({
        longitude: -111,
        latitude: 34,
        zoom: 5
    });

    //RUN WHEN PAGE RENDERS TO SHOW ALL PINS
    //const [pins, setPins] = useState([])
    // useEffect(() => {
    //     const getPins = async function () {
    //       try {
    //         const res = await axios.get("/pins");
    //         setPins(res.data);
    //         console.log(pins)
    //       } catch (err) {
    //         console.log(err)
    //       }
    //     }
    //     getPins();
    //   }, [])

    return (
        <div>
            <Map
                {...viewPort}
                mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                onMove={evt => setViewport(evt.viewPort)}
                style={{ width: 800, height: 600 }}
                mapStyle="mapbox://styles/carlbush/cl4yu61c9000214qr90dghwba"
                /* OTHER VIEW STYLE = mapbox://styles/mapbox/streets-v9*/
            >
                <Marker longitude={-111.9} latitude={33.4} color="red"></Marker>
                <Popup
                    longitude={-111.9}
                    latitude={33.4}
                    anchor="left"
                    closeButton={true}
                    closeOnClick={false}>
                    <div className="card">
                        <label>Pet Name</label>
                        <h4 className="place">Sgt. Peppers</h4>
                        <label>Owner Name</label>
                        <p>JK Meowling</p>
                        <label>Contact Number</label>
                        <p><b>520-623-4321</b></p>
                        <label>Date Missing</label>
                        <p>06/23/2022</p>
                    </div>
                </Popup>
            </Map>;
        </div>
    );
};

export default MapTracker;