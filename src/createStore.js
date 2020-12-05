import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from './state/reducers';


export const middlewares = [ReduxThunk, logger]

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(rootReducer)