import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL
} from './constants'; 

const initialState = {
    searchField: ''
}

// Reducers get the input of a default state and modify the default state
export const searchRobots = ( state = initialState, action = {} ) => {
    // console.log(action.type);
    switch( action.type ) {
        case CHANGE_SEARCH_FIELD:
            // Create a new object, using the initialState
            // Adapts the searchField property
            return Object.assign({}, state, {searchField: action.payload} );

            // Other ways, just destructure the existing opject
            // return { ...state, searchField: action.payload }
        default:
            return state;

    }

}

const initialRobotState = {
    robots: [],
    error: '',
    isPending: false
}

export const requestRobots = ( state = initialRobotState, action = {}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true };
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isPending: false };
        case REQUEST_ROBOTS_FAIL:
            return { ...state, error: action.payload, isPending: false };  
        default:
            return state;                        
    }
}