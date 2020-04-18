import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL
} from './constants'; 

export const setSearchField = (text) => ({
    // console.log(text);
    type: CHANGE_SEARCH_FIELD,
    payload: text // The data that is send is payload
}); // Curly brackets in arrow function means return

// WTH is a dispatch?
// This is a higher roder function, a function that returns a function. 
// A sort of functionception, a function in a function
// trunk middleware uses this to listen this, recognizes it as a function,
// Then processs the dispatch, and return an object in the end. 
// By default it dispatches the pending thing, after async actions are done.
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}) )
    .catch( error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error}) );
}