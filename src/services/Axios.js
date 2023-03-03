import axios from 'axios';
import { URL } from '../constant/Index';


export const userList = async () => axios.get(`${URL}/api/users`)
export const viewUser = async (id) => axios.get(`${URL}/api/user/${id}`)
export const getUser = async (id) => axios.get(`${URL}/api/user/${id}`);
export const updateUser = async (payload) =>await axios.put(`${URL}/api/user`, payload);
export const addUser = async (payload) =>await axios.post(`${URL}/api/user`, payload);
