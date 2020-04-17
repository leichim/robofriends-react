import React from 'react';

/**
 * Error boundaries can be used to display something else when an error happens. Than can be wrapped arround components
 * Very useful for production apps.
 * 
 * If you're in production, you wont really see the ErrorBoundary
 */

class ErrorBoundary extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = {
            hasError: false
        };

    }

    // Equals to a try catch block, if anything went wrong inside the component, error is catched
    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if( this.state.hasError ) {
            return(<h1>Oops, Error!</h1>);
        }  
        
        return this.props.children;
        
    }

}

export default ErrorBoundary;