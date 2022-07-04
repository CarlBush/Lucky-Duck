// import React from 'react';
// import { Card, Header, Image } from 'semantic-ui-react'

// const PetList = ({ pins }) => {

//        if (!pins.length) {
//         return <Header as='h2' textAlign='center'>No Pets Yet</Header>;
//     }

//     return (
//         <div className='petList'>
//             <Header as='h2' textAlign='center'>Lost Pets</Header>
//             {pins.map(pins => (
//                 //key tells react to track what data to re-render if something changes
//                 <Card centered fluid key={pins._id}>
//                     <Card.Content>
//                         <Image className="image" src={pins.image} size = "medium" rounded centered alt={pins.image}/>
//                         <Card.Header textAlign='center' content={pins.pet} />
//                         <Card.Description textAlign='center' content={pins.username}/>
//                         <Card.Description textAlign='center' content={pins.contact}/>
//                         <Card.Description textAlign='center' content={pins.pinText} />
//                         <Card.Meta textAlign='center' content={pins.createdAt}/>
//                     </Card.Content>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default PetList;