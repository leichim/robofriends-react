import React from 'react';

// Anything passed within an element is accesible using props.children
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '70vh'}}>
            {props.children}
        </div>
    );
}

export default Scroll;