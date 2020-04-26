import {
    API_START,
    API_SUCCESS,
    API_FAILURE,
    API_ADD,
    API_ADDING
} from '../actions/types';

const initState = {
    smurfs: [],
    isFetching: false,
    error: ''
};


const reducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case API_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case API_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ""
            }
        case API_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case API_ADDING:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case API_ADD:
            return {
                ...state,
                isFetching: false,
                error: "",
                smurfs: action.payload
            }
        default:
            return state
    }
}

export default reducer