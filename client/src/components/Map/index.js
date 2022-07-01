import "./map.css"
import * as React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { useState, useEffect } from "react";

const pins = [
    {
        user: "Carl",
        pet: "SgtPeppers",
        contact: 5205205205,
        createdAt: "06/30/2022",
        lat: 32.25,
        long: -110.97
    },
    {
        user: "Rod",
        pet: "ColSanders",
        contact: 4803942482,
        createdAt: "06/20/2022",
        lat: 33.4,
        long: -111.9
    },
    {
        user: "Madi",
        pet: "Meowzers",
        contact: 6231235432,
        createdAt: "05/13/2022",
        lat: 33.1,
        long: -111.5
    },

]


const MapTracker = function () {

    const [viewPort, setViewport] = useState({
        longitude: -111,
        latitude: 34,
        zoom: 5
    });


    // const [pins, setPins] = useState([])

    // useEffect(() => {
    //     const getPins = async function () {
    //         try {
    //             //const res = await axios.get("/pins");
    //             setPins(pins.data);
    //             console.log(pins)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     getPins();
    // });

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
                {pins.map(p => (
                    <>
                        <Marker longitude={p.long} latitude={p.lat} color="red">
                        </Marker>
                        <Popup
                            longitude={p.long}
                            latitude={p.lat}
                            anchor="left"
                            closeButton={true}
                            closeOnClick={false}>
                            <div className="card">
                                <label>Pet Name</label>
                                <h4>{p.pet}</h4>
                                <label>Owner Name</label>
                                <p>{p.user}</p>
                                <label>Contact Number</label>
                                <p><b>{p.contact}</b></p>
                                <label>Date Missing</label>
                                <p>{p.createdAt}</p>
                            </div>
                        </Popup>
                    </>
                ))}
            </Map>;
        </div>
    );
};

export default MapTracker;