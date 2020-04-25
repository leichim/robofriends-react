import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

/** 
 * Shallow rendering is just rendering the card component (not any children components inside the component)
 * A form of unit testing for components
 * 
 * Mount is used for components that may interact with the dom, but you need a browser or jsdom because it does a full render (but it's rarely used)
 * 
 * Render is used to render react components, but unlike render it is rendered to a static html using cheer.io
 */
it('render card component', () => {
    // console.log(shallow(<Card />));
    // expect( shallow(<Card />).length ).toEqual(1);
    expect( shallow(<Card />) ).toMatchSnapshot(); // Detects any changes on the card, saves a snapshot in __snaphots__
});