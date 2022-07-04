import "./map.css";
import * as React from 'react';
import Map, { Marker, Popup, FullscreenControl } from 'react-map-gl';
import { useState } from "react";
import { Button, Modal, Input, Form, Grid } from 'semantic-ui-react';
import PetList from "../PetList";

const pins = [
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

]

const MapTracker = function () {

    const [open, setOpen] = React.useState(false)
    const currentUser = ({
        username: "Carl",
        contact: 5205205205,
        createdAt: "05/11/2022",
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
        doubleClickZoom: false,
    });

    //ONCLICK OPENS MARKER POPUP
    const handleMarkerClick = function (id, lat, long) {
        setCurrentPinId(id);
        //ONCE POPUP IS CLICKED IT WILL CENTER THE POPUP ON MAP
        setViewport({ ...viewPort, latitude: lat, longitude: long })

    };

    //RETRIEVE THE LAT & LONG FROM DOUBLE CLICK ON MAP
    const handleAddClick = function (e) {

        const token = true /*Auth.loggedIn() ? Auth.getToken() : null;*/

        if (!token) {
            return false;
        }
        try {
            setNewPin({
                long: e.lngLat.lng,
                lat: e.lngLat.lat
            })
        } catch (err) {
            console.log(err);
        }
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

        <Grid columns={2} stackable>
            <Grid.Row>
                <Grid.Column width={10} className="mapContainer" >
                        <Map
                            {...viewPort}
                            mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                            onMove={evt => setViewport(evt.viewPort)}
                            mapStyle="mapbox://styles/carlbush/cl4yu61c9000214qr90dghwba"
                            onDblClick={handleAddClick}
                        /* OTHER VIEW STYLE = mapbox://styles/mapbox/streets-v9*/
                        >
                            {pins.map((p) => (
                                <>
                                    <Marker longitude={p.long} latitude={p.lat} key={p._id} onClick={() => handleMarkerClick(p._id, p.lat, p.long)}>
                                        <img src={require(`./favicon.ico`)} alt="duck" />
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
                                    closeOnClick={true}
                                    onDblClick
                                >
                                    <div className="card">
                                        <Modal
                                            onClose={() => setOpen(false)}
                                            onOpen={() => setOpen(true)}
                                            open={open}
                                            trigger={<Button id='profile-button' size='small'>Find Lost Pet</Button>}
                                        >
                                            <Modal.Header>Need Help Finding Your Pet?</Modal.Header>
                                            <Modal.Content>
                                                <Modal.Description>
                                                    <p>
                                                        Please fill out the information below to post your lost pet and let the Lucky Duck Community aid
                                                        you in your search. Include your pet's name, your city and state, specific area your pet was last
                                                        seen, how you'd like to be contacted if spotted, and any other important details (is your pet skittish,
                                                        friendly, etc.).
                                                    </p>
                                                </Modal.Description>
                                            </Modal.Content>
                                            <Modal.Actions>
                                                <Form onSubmit={handleSubmit}>
                                                    <Form.Field>
                                                        <Input focus placeholder='Pet Name...' onChange={(e) => setPet(e.target.value)} />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <Input focus placeholder='Description...' onChange={(e) => setPinText(e.target.value)} />
                                                    </Form.Field>
                                                    <Button
                                                        content="Share pet post"
                                                        labelPosition='right'
                                                        icon='checkmark'
                                                        id='share'
                                                        onSubmit={() => setOpen(false)}
                                                        positive
                                                    />
                                                </Form>
                                            </Modal.Actions>
                                        </Modal>

                                    </div>
                                </Popup>
                            )}
                            <FullscreenControl />
                        </Map>
                </Grid.Column>
                <Grid.Column width={6}>
                    <PetList pins={pins} />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    );
};

export default MapTracker;