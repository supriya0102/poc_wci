import axios from 'axios';
import { URL } from '../constant/Index';


export const userList = async () => axios.get(`${URL}/api/users`)
export const viewUser = async (id) => axios.get(`${URL}/api/user/${id}`)

