import { validationUtility } from "../../utils/validation";
// designation
export const getValidation = (dispatchForErr,validationAction,state) => {
    return new Promise((resolve, reject) => {
      if (
        validationUtility.text(state.firstName) &&
        validationUtility.text(state.lastName) &&
        validationUtility.email(state.email) &&
        validationUtility.text(state.college) &&
        validationUtility.text(state.educationType) &&
        validationUtility.text(state.employeeCode) &&
        validationUtility.text(state.passingYear) &&
        validationUtility.text(state.companyName) &&
        validationUtility.text(state.designation)
      ) {
        resolve(true)
      } else {
        if (!validationUtility.text(state.firstName)) {
          dispatchForErr(validationAction('firstName', true))
        }

        if (!validationUtility.text(state.lastName)) {
          dispatchForErr(validationAction('lastName', true))
        }

        if (!validationUtility.email(state.email)) {
          dispatchForErr(validationAction('email', true))
        }

        if (!validationUtility.text(state.college)) {
          dispatchForErr(validationAction('college', true))
        }

        if (!validationUtility.text(state.educationType)) {
          dispatchForErr(validationAction('educationType', true))
        }

        if (!validationUtility.text(state.employeeCode)) {
          dispatchForErr(validationAction('employeeCode', true))
        }

        if (!validationUtility.text(state.passingYear)) {
          dispatchForErr(validationAction('passingYear', true))
        }

        if (!validationUtility.text(state.companyName)) {
          dispatchForErr(validationAction('companyName', true))
        }

        if (!validationUtility.text(state.designation)) {
          dispatchForErr(validationAction('designation', true))
        }
        resolve(false)
      }
    });
  };