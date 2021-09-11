import * as ActionTypes from './actionTypes';

export const user = (state = {user: '', isLoading: false, errMess: null}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return {...state, user: action.payload}
        default: 
            return state;
    }
}