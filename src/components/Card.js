import React from 'react';
import { shallow, mount, render } from 'enzyme';

// A JS function implies it being the render function
const Card = ({id, name, email}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={'https://robohash.org/' + id + '?height=200width=200'} alt="Robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;