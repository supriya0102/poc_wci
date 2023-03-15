import { ADD_USER_API_SUCCESS, UPDATE_USER_API_SUCCESS, USER_DETAIL_API_SUCCESS, USER_LIST_API_SUCCESS,DELETE_USER_API_SUCCESS } from '../../constant/Index';
import { userList,getUser,updateUser, addUser,deleteUser } from '../../services/Axios';

export const users = async () => {
    const user = await userList();
    return { type: USER_LIST_API_SUCCESS, payload: user.data.users };
}

export const getUserDetails = async (id) => {
    const user = await getUser(id);
    return { type: USER_DETAIL_API_SUCCESS, payload: user.data } 
}

export const updateUserDetails = async (payload) =>{
    const user = await updateUser(payload);
    return { type: UPDATE_USER_API_SUCCESS, payload: user.data } 
}

export const addUserDetails = async (payload) =>{
    const user = await addUser(payload);
    return {type:ADD_USER_API_SUCCESS,payload:user.data}
}

export const deleteUserDetails = async (userId) =>{
    const user = await deleteUser(userId);
    return {type:DELETE_USER_API_SUCCESS,payload:user.data}
}

