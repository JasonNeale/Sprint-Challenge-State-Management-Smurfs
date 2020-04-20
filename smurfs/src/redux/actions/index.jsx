// External imports
import axios from 'axios'

// Local imports
import {
    API_START,
    API_SUCCESS,
    API_FAILURE,
    API_ADDING,
    API_ADD
} from './types'


export const getSMURFS = () => {
    return dispatch => {
        dispatch({ type: API_START });
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: API_SUCCESS, payload: res.data })
        })
        .catch(error => {
        console.log(error)
        dispatch({ type: API_FAILURE, payload: error })
        })
    }
}

export const addSMURFS = ( smurf ) => {
    return dispatch => {
        dispatch({ type: API_ADD });
        axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: API_ADDING, payload: res.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
} 