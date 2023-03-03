import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { usersReducer,userDetailReducer,updateUserReducer, addUserReducer } from "./home/HomeReducer";

const rootReducer = combineReducers({ usersReducer,userDetailReducer,updateUserReducer,addUserReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
