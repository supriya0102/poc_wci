import { USER_DETAIL_VIEW } from '../../constant/Index';

const initialState = { users: [], isLoading: false, error: null };

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case USER_DETAIL_VIEW: {
            return { ...state, users: action.payload, isLoading: false, error: null };
        }      
        default: return state;
    }
}