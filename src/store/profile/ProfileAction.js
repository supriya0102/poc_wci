import {USER_DETAIL_VIEW} from '../../constant/Index';
import { viewUser } from '../../services/Axios';


export const users = async () => {
    const res = await viewUser()
    return {type: USER_DETAIL_VIEW,  payload: {basicInfo:res.data?.basicInfo,academicInfo:res.data?.academicInfo,employementInfo:res.data?.employementInfo}}
}