import "./map.css";
import * as React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import { useState } from "react";

const pins = [
    {
        _id: 1,
        user: "Carl",
        pet: "SgtPeppers",
        contact: 5205205205,
        createdAt: "06/30/2022",
        lat: 32.25,
        long: -110.97
    },
    {
        _id: 2,
        user: "Rod",
        pet: "ColSanders",
        contact: 4803942482,
        createdAt: "06/20/2022",
        lat: 33.4,
        long: -111.9
    },
    {
        _id: 3,
        user: "Madi",
        pet: "Meowzers",
        contact: 6231235432,
        createdAt: "05/13/2022",
        lat: 33.1,
        long: -111.5
    },

]


const MapTracker = function () {
    const [currentPinId, setCurrentPinId] = useState(null);
    const [newPin, setNewPin] = useState(null);

    //DEFAULT STARTING LOCATION
    const [viewPort, setViewport] = useState({
        longitude: -111,
        latitude: 34,
        zoom: 5.8
    });

    //ONCLICK OPENS MARKER POPUP
    const handleMarkerClick = function (id) {
        setCurrentPinId(id);
    };

    const handleAddClick = function (e) {
        console.log(e);
        setNewPin({
            long: e.lngLat.lng,
            lat: e.lngLat.lat
        })
    };

    return (
        <div>
            <Map
                {...viewPort}
                mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                onMove={evt => setViewport(evt.viewPort)}
                style={{ width: 800, height: 600 }}
                mapStyle="mapbox://styles/carlbush/cl4yu61c9000214qr90dghwba"
                onDblClick={handleAddClick}
            /* OTHER VIEW STYLE = mapbox://styles/mapbox/streets-v9*/
            >
                {pins.map((p) => (
                    <>
                        <Marker longitude={p.long} latitude={p.lat} color="red" onClick={() => handleMarkerClick(p._id)}>

                        </Marker>
                        {p._id === currentPinId && (
                            <Popup
                                longitude={p.long}
                                latitude={p.lat}
                                anchor="left"
                                closeButton={true}
                                closeOnClick={false}
                            >
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
                        )}
                    </>
                ))}
                {newPin && (
                    <Popup
                        longitude={newPin.long}
                        latitude={newPin.lat}
                        anchor="left"
                        closeButton={true}
                        closeOnClick={false}
                    >
                        Hello
                    </Popup>
                )}
            </Map>
        </div>
    );
};

export default MapTracker;