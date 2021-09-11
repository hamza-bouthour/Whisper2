import * as ActionTypes from './actionTypes';

export const addUser = (user) => {
    return {
        type: ActionTypes.ADD_USER,
        payload: user
    }
}
export const addChats = (chats) => {
    console.log('chats' + chats)
    return {
        type: ActionTypes.ADD_CHATS,
        payload: chats
    }
}

export const activeUserChat = chat => {
    return {
        type: ActionTypes.ACTIVE_CHAT,
        payload: chat

    }
}

export const setLoading = () => ({
    type: ActionTypes.SET_LOADING
})