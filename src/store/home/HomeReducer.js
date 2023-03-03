import {
    USER_LIST_API_REQUEST, USER_LIST_API_SUCCESS, USER_LIST_API_FAILURE, USER_DETAIL_API_REQUEST,
    USER_DETAIL_API_SUCCESS, USER_DETAIL_API_FAILURE,
    UPDATE_USER_API_REQUEST, UPDATE_USER_API_SUCCESS,
    UPDATE_USER_API_FAILURE
} from '../../constant/Index';

const initialState = { users: [], isLoading: false, error: null };
const userDetailsInitialState = { user: {}, isLoading: false, error: null };
const updateUserInitialState = { user: {}, isLoading: false, error: null };

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LIST_API_REQUEST: {
            return { ...state, users: [], isLoading: true, error: null };
        }
        case USER_LIST_API_SUCCESS: {
            return { ...state, users: action.payload, isLoading: false, error: null };
        }
        case USER_LIST_API_FAILURE: {
            return { ...state, users: [], isLoading: false, error: action.payload };
        }

        default: return state;
    }
}

export const userDetailReducer = (state = userDetailsInitialState, action) => {
    switch (action.type) {
        case USER_DETAIL_API_REQUEST: {
            return { ...state, user: {}, isLoading: true, error: null };
        }
        case USER_DETAIL_API_SUCCESS: {
            console.log("action payload", action.payload)
            return { ...state, user: action.payload, isLoading: false, error: null };
        }
        case USER_DETAIL_API_FAILURE: {
            return { ...state, user: {}, isLoading: false, error: action.payload };
        }

        default: return state;
    }
}

export const updateUserReducer = (state = updateUserInitialState, action) => {
    switch (action.type) {
        case UPDATE_USER_API_REQUEST: {
            return { ...state, user: {}, isLoading: true, error: null };
        }
        case UPDATE_USER_API_SUCCESS: {
            console.log("action payload", action.payload)
            return { ...state, user: action.payload, isLoading: false, error: null };
        }
        case UPDATE_USER_API_FAILURE: {
            return { ...state, user: {}, isLoading: false, error: action.payload };
        }

        default: return state;
    }
}