import axios from 'axios';
import { URL } from '../constant/Index';


// export async function userList(){
//     return axios.get(`${URL}/api/users`)
// }

export const userList = async () => axios.get(`${URL}/api/users`)
export const viewUser = async () => axios.get(`${URL}/api/user/12aa1f62-d565-4053-90eb-54ba08ee2df5`)