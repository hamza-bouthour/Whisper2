import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { chatsUser } from './chats';
import { user } from './user';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            chatsUser,
            user
        }),
        composeEnhancer(applyMiddleware(thunk, logger))
    );
    
    return  store; 
}