// import { validationUtility } from "../../utils/validation";
// // designation
// export const getValidation = (dispatchForErr,validationAction,formData) => {
//     return new Promise((resolve, reject) => {
//       if (
//         validationUtility.text(formData.firstName) &&
//         validationUtility.text(formData.lastName) &&
//         validationUtility.email(formData.email) &&
//         validationUtility.text(formData.college) &&
//         validationUtility.text(formData.educationType) &&
//         validationUtility.text(formData.employeeCode) &&
//         validationUtility.text(formData.passingYear) &&
//         validationUtility.text(formData.companyName) &&
//         validationUtility.text(formData.designation)
//       ) {
//         resolve(true)
//       } else {
//         if (!validationUtility.text(formData.firstName)) {
//           dispatchForErr(validationAction('firstName', true))
//         }

//         if (!validationUtility.text(formData.lastName)) {
//           dispatchForErr(validationAction('lastName', true))
//         }

//         if (!validationUtility.email(formData.email)) {
//           dispatchForErr(validationAction('email', true))
//         }

//         if (!validationUtility.text(formData.college)) {
//           dispatchForErr(validationAction('college', true))
//         }

//         if (!validationUtility.text(formData.educationType)) {
//           dispatchForErr(validationAction('educationType', true))
//         }

//         if (!validationUtility.text(formData.employeeCode)) {
//           dispatchForErr(validationAction('employeeCode', true))
//         }

//         if (!validationUtility.text(formData.passingYear)) {
//           dispatchForErr(validationAction('passingYear', true))
//         }

//         if (!validationUtility.text(formData.companyName)) {
//           dispatchForErr(validationAction('companyName', true))
//         }

//         if (!validationUtility.text(formData.designation)) {
//           dispatchForErr(validationAction('designation', true))
//         }
//         resolve(false)
//       }
//     });
//   };