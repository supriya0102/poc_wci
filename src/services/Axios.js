import axios from 'axios';
import { URL } from '../constant/Index';


// export async function userList(){
//     return axios.get(`${URL}/api/users`)
// }

export const userList = async () => axios.get(`${URL}/api/users`)