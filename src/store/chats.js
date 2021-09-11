import * as ActionTypes from './actionTypes';

export const chatsUser = (state = {chats: '',chat: '', isLoading: false, errMess: null}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CHATS:
            return {...state, chats: action.payload, isLoading: false}
        case ActionTypes.SET_LOADING:
            return {...state, isLoading: true}
        case ActionTypes.ACTIVE_CHAT:
            return {...state, chat: action.payload}
        default: 
            return state;
    }
}