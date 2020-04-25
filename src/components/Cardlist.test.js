import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Cardlist from './Cardlist';

it('renderlist card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            email: 'john@gmail.com'
        }
    ];
    expect( shallow(<Cardlist robots={mockRobots} />) ).toMatchSnapshot(); // Detects any changes on the cardlist -- doesn't seem to work? Snaphots have empty object
});