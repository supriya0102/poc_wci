import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { profileReducer } from "./profile/profileReducer";
import { usersReducer,userDetailReducer,updateUserReducer } from "./home/HomeReducer";


const rootReducer = combineReducers({ usersReducer,userDetailReducer,profileReducer,updateUserReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
