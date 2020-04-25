import React from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots } from '../actions';

// Used by react-redux to connect our props.
// Geez, react is so cumbersome compared to Vue
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,
        searchField: state.searchRobots.searchField, // more reducers
        // searchField: state.searchField // One reducer
    }
};

// Dispatch is the thing that triggered the action,
// so it gets dispatched in the reducer
// What is dispatch??
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

// You may use the/containers/ folder to place your primary app files in.
class App extends React.Component {

    // Set-ups the smart component
    constructor() {
        super(); // Required to initialize the thing and use 'this' keyword

        // State is something that can change and affect our app, usually living in our parent component. In other words, dynamic props
        // this.state = {
        //     robots: [],
        //     searchfield: ''            
        // }
        // We're now passing everything as a prop

        // Use this.setState({property: value}) to change the state for a given item

    }

    // This is a lifecycle method, being part of react
    componentDidMount() {

        this.props.onRequestRobots();

        // console.log(this.props.store.getState());

        // Fetch is async, updates users when response is there
        // Fetch is an object on the window object, it's a tool that can be used in JS
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then( response => {
        //         return response.json();
        //     })
        //     .then( users => {
        //         this.setState({robots: users});
        //     });

        // Above.... We also did this with redux

    }

    // You can add functions 
    // Use the arrow function to get the 'this' from the correct context, 
    // otherwise, if using a normal function it will retrieve 'this' from the context it is used
    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value});
    // }

    // The above function is now passed as a prop using connect()
    // referring to the setSearchField action from actions.js

    // Built-in React function
    // The render method is called again if the state of a used property changes
    render() {

        // const { robots, searchfield } = this.state; -> destructure them, now you can just use robots and searchfield, no this.state.robots etc anymore..

        // Basic example
        // const filteredRobots = this.state.robots.filter( robot => {
        //     return robot.name.toLowerCase().includes( this.state.searchfield.toLowerCase() );
        // });
        
        // Redux example
        const filteredRobots = this.props.robots.filter( robot => {
            return robot.name.toLowerCase().includes( this.props.searchField.toLowerCase() );
        });        

        if( this.props.isPending ) {
            return <h1>Loading</h1>
        } else {
            // Scroll is a component with a slot, it can use children
            // 
            return (
                <div className="tc">
                    <Header /> 
                    {/* Basic <SearchBox searchChange={this.onSearchChange} />, Redux: */}
                    <SearchBox searchChange={this.props.onSearchChange} />
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

// Connect is a higher other function, a function that returns another function
// Thus, we can use double brackets.
// Connect is used to subscribe to any changes in the store
// Connect connects redux to react
// Use connect to match several containers to a store
export default connect(mapStateToProps, mapDispatchToProps)(App);