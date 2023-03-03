import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./home/HomeReducer";
import { profileReducer } from "./profile/profileReducer";


const rootReducer = combineReducers({ usersReducer, profileReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
