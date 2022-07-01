import "./map.css";
import * as React from 'react';
import Map, { Marker, Popup, FullscreenControl } from 'react-map-gl';
import { useState } from "react";
import { pins } from "../../pages/home";

const MapTracker = function (props) {

    const currentUser = ({
        username: "Carl",
        contact: 5205205205,
        createdAt: "05/11/2022"
    })

    const [currentPinId, setCurrentPinId] = useState(null);
    const [newPin, setNewPin] = useState(null);

    const [pet, setPet] = useState(null);
    const [pinText, setPinText] = useState(null);

    //DEFAULT STARTING LOCATION
    const [viewPort, setViewport] = useState({
        longitude: -111,
        latitude: 34,
        zoom: 5.8,
        doubleClickZoom: false
    });

    //ONCLICK OPENS MARKER POPUP
    const handleMarkerClick = function (id, lat, long) {
        setCurrentPinId(id);
        //ONCE POPUP IS CLICKED IT WILL CENTER THE POPUP ON MAP
        setViewport({ ...viewPort, latitude: lat, longitude: long })
    };

    //RETRIEVE THE LAT & LONG FROM DOUBLE CLICK ON MAP
    const handleAddClick = function (e) {
        console.log(e);
        setNewPin({
            long: e.lngLat.lng,
            lat: e.lngLat.lat
        })

    };

    //CREATES NEW PIN ON SUBMIT
    //currently pushes to array "pins"
    const handleSubmit = async function (e) {
        e.preventDefault();
        const newCreatedPin = {
            username: currentUser.username,
            contact: currentUser.contact,
            pet: pet,
            pinText: pinText,
            lat: newPin.lat,
            long: newPin.long,
            createdAt: currentUser.createdAt
        }
        await console.log(newCreatedPin);
        pins.push(newCreatedPin);
        setNewPin(null);
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
                transitionDuration="500"
            /* OTHER VIEW STYLE = mapbox://styles/mapbox/streets-v9*/
            >
                {pins.map((p) => (
                    <>
                        <Marker longitude={p.long} latitude={p.lat} color="none" onClick={() => handleMarkerClick(p._id, p.lat, p.long)}>
                        <img src={require(`./favicon.ico`)} alt="duck"/>
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
                                    <p>{p.username}</p>
                                    <label>Contact Number</label>
                                    <p><b>{p.contact}</b></p>
                                    <label>Date Missing</label>
                                    <p>{p.createdAt}</p>
                                    <label>Comments</label>
                                    <p>{p.pinText}</p>
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
                        <div className="card">
                            <form onSubmit={handleSubmit}>
                                <label>Pet Name</label>
                                <input placeholder="Pet Name" onChange={(e) => setPet(e.target.value)}></input>
                                <label>Comments</label>
                                <textarea placeholder="Enter Comments Here" onChange={(e) => setPinText(e.target.value)}></textarea>
                                <button className="pinButton" type="submit">Add Pin</button>
                            </form>
                        </div>
                    </Popup>
                )}
                <FullscreenControl />
            </Map>
        </div>
    );
};

export default MapTracker;