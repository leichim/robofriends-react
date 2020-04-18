import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
    
    // const cardComponent = robots.map((user, i) => {
    //     return (<Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={i}/>)
    // })

    // Will display the ErrorBoundary
    // if( true ) {
    //     throw new Error('NOOOO');
    // }
    
    return (
        <div>
            {
                robots.map((user, i) => {
                    return ( <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={i} /> )
                })
            }  
        </div>
    )

}

export default Cardlist;