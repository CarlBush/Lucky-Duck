import React from 'react';
import { Card, Header } from 'semantic-ui-react'

const PetList = ({ pins }) => {

    // const pinsHard = [
    //     {
    //         _id: 1,
    //         username: "Carl",
    //         pet: "SgtPeppers",
    //         contact: 5205205205,
    //         pinText: "please help",
    //         lat: 32.25,
    //         long: -110.97,
    //         createdAt: "06/30/2022"
    //     },
    //     {
    //         _id: 2,
    //         username: "Rod",
    //         pet: "ColSanders",
    //         contact: 4803942482,
    //         pinText: "HELPPP",
    //         lat: 33.4,
    //         long: -111.9,
    //         createdAt: "06/20/2022",
    //     },
    //     {
    //         _id: 3,
    //         username: "Madi",
    //         pet: "Meowzers",
    //         contact: 6231235432,
    //         pinText: "SOSSSSS",
    //         lat: 33.1,
    //         long: -111.5,
    //         createdAt: "05/13/2022"
    //     }
    // ]
    
    if (!pins.length) {
        return <Header as='h2' textAlign='center'>No Pets Yet</Header>;
    }

    return (
        <div className='petList'>
            <Header as='h2' textAlign='center'>Lost Pets</Header>
            {pins.map(pins => (
                //key tells react to track what data to re-render if something changes
                <Card centered fluid key={pins._id}>
                    <Card.Content>
                        <Card.Header textAlign='center' content={pins.pet} />
                        <Card.Description textAlign='center' content={pins.username}/>
                        <Card.Description textAlign='center' content={pins.contact}/>
                        <Card.Description textAlign='center' content={pins.pinText} />
                        <Card.Meta textAlign='center' content={pins.createdAt}/>
                    </Card.Content>
                </Card>
                // <div key={pins._id}>
                //     <h3>{pins.pet}</h3>
                //     <p textAlign='center'>
                //         {pins.pinText}
                //     </p>
                // </div>
            ))}
        </div>

        // <div>
        //     <h2>Lost Pets:</h2>
        //     {pinsHard.map(pinsHard => (
        //         <div>
        //             <h3>{pinsHard.pet}</h3>
        //             <p>
        //                 {pinsHard.pinText}
        //             </p>
        //         </div>
        //     ))}
        // </div>
    );
};

export default PetList;