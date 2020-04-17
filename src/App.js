import React from 'react';
import Cardlist from './components/Cardlist';
import SearchBox from './components/SearchBox';
// import {robots} from './robots';
import Scroll from './components/Scroll';

import ErrorBoundary from './components/ErrorBoundary';

import './App.css';

// You may use /containers/ folder to place your primary app files in.

class App extends React.Component {

    // Set-ups the smart component
    constructor() {
        super(); // Required to initialize the thing and use 'this' keyword

        // State is something that can change and affect our app, usually living in our parent component. In other words, dynamic props
        this.state = {
            robots: [],
            searchfield: ''            
        }

        // Use this.setState({property: value}) to change the state for a given item

    }

    // This is a lifecycle method, being part of react
    componentDidMount() {

        // Fetch is async, updates users when response is there
        // Fetch is an object on the window object, it's a tool that can be used in JS
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => {
                return response.json();
            })
            .then( users => {
                this.setState({robots: users});
            });

    }

    // You can add functions 
    // Use the arrow function to get the 'this' from the correct context, 
    // otherwise, if using a normal function it will retrieve 'this' from the context it is used
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value});
    }

    // Built-in React function
    // The render method is called again if the state of a used property changes
    render() {

        // const { robots, searchfield } = this.state; -> destructure them, now you can just use robots and searchfield, no this.state.robots etc anymore..

        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes( this.state.searchfield.toLowerCase() );
        });

        if( this.state.robots.length === 0 ) {
            return <h1>Loading</h1>
        } else {
            // Scroll is a component with a slot, it can use children
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <Cardlist robots={filteredRobots} />
                        </ErrorBoundary> 
                    </Scroll>
                </div>
            )
        }


    }

}

export default App;