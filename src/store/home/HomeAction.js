import { USER_LIST_API_SUCCESS } from '../../constant/Index';


const commonMapper = (id, firstName, lastName, email) => { return  { id, firstName, lastName, email } }
 
const rows = [
    commonMapper('1', 'Virat', 'Kohli', 'virat@mailinator.com'),
    commonMapper('2', 'Rohit', 'Sharma', 'rohit@mailinator.com'),
    commonMapper('3', 'Surya', 'Yadav', 'surya@mailinator.com'),
    commonMapper('4', 'KL', 'Rahul', 'rahul@mailinator.com'),
    commonMapper('5', 'Rishab', 'Pant', 'rishab@mailinator.com'),
];

export const users = () => {
    return { type: USER_LIST_API_SUCCESS, payload: rows }
}