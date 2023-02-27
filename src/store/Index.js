import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./home/HomeReducer";


const rootReducer = combineReducers({ usersReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
