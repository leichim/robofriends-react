import React from 'react';
import CounterButton from './CounterButton';

// A JS function implies it being the render function
class Header extends React.Component {
    
    // Lifecycle method that can prevent the component from rendering again
    // Controls the update cycle based upon the props and states passed
    shouldComponentUpdate(nextProps, nextState) {
        return false; // The default is always true
    }
    
    render() {
        return (
            <div>
                
                <h1 className="f1">RoboFriends</h1>
                <CounterButton color={'red'} />
            </div>
        )
    }

}

export default Header;