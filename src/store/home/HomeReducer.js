import { USER_LIST_API_REQUEST, USER_LIST_API_SUCCESS, USER_LIST_API_FAILURE } from '../../constant/Index';

const initialState = { users: [], isLoading: false, error: null };

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