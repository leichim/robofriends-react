import React from 'react';

// A JS function implies it being the render function
// React also has PureComponents, these are components that only update when simple props update.
// Use React.PureComponent then.
class CounterButton extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    
    // Lifecycle method that can prevent the component from rendering again
    // Controls the update cycle based upon the props and states passed
    // Don't overdo this for every component, as it influences performance
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        console.log(nextState);

        // You can also access props and so forth and decide rendering

        // Only updates the component when count is changed
        if( this.state.count !== nextState.count ) {
            return true;
        } else {
            return false;
        } 

    }

    updateCount = () => {
        // this.setState({ count: this.state.count + 1}); // State is not async, so use another method
        this.setState( state => {
            return { count: state.count + 1 }  // Creates a new state based on the old state  
        } );
    }
    
    render() {
        console.log('CounterButton');
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        )
    }

}

export default CounterButton;