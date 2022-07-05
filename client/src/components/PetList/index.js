import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react'
import Comments from '../Comment';

const PetList = ({ pins, currentPinId, handleMarkerDelete }) => {

    return (
        <div className='petList'>
            {pins.map(p => (
                <>
                    {p._id === currentPinId && (
                        <>
                            <Card centered fluid key={p._id} className="pet-card-container">
                                <Card.Content>
                                    <Image className="image" src={p.image} size="large" rounded centered alt={p.image} />
                                    <Card.Header textAlign='center' content={p.pet} />
                                    <Card.Description textAlign='center' content={p.username} />
                                    <Card.Description textAlign='center' content={p.contact} />
                                    <Card.Description textAlign='center' content={p.description} />
                                    <Card.Meta textAlign='center' content={p.createdAt} />
                                </Card.Content>
                                
                                <Button color='purple' onClick={() => handleMarkerDelete(p._id)}>Remove Lost Pet</Button>
                            </Card>
                            <Comments />
                        </>
                    )}
                </>
            ))}
        </div>
    );
};

export default PetList;