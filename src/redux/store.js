import { applyMiddleware} from "redux";
import { legacy_createStore as createStore } from 'redux'
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";
//import { default } from "redux-thunk";

const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

const store =  createStore(rootReducer, applyMiddleware(...middlewares));


export default store;