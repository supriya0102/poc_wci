import React, { useEffect, useReducer, useState } from "react";
import './AddUser.css'
import { TextField, Grid, Button, MenuItem, Card } from "@mui/material";
import { validationAction, validationReducer, validationUtility } from "../../utils/validation";
import { getValidation } from "./validationCheck";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../../store/home/HomeAction";
import { useDispatch, useSelector } from "react-redux";


const userErrState = {
  firstName: false,
  lastName: false,
  email: false,
  institute: false,
  type: false,
  passingYear: false,
  employeeCode: false,
  companyName: false,
  designation: false,
  isValidPassingYear: false,
  isValidEmail: false,
};

const AddUser = ({ userId }) => {
  const navigate = useNavigate()
  const [stateForErr, dispatchForErr] = useReducer(validationReducer, userErrState)

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if(id) getUserDetails(id).then((res) => {
      dispatch(res);
    });
  }, [dispatch, id]);

  // useEffect(() => {
  //   getUserDetails(id).then((res) => {
  //     dispatch(res);
  //   });
  // }, [id]);

  const reduxStore = useSelector((state) => {
    return state.userDetailReducer.user;
  });

  const updatedReduxStore = useSelector((state) => {
    return state.updateUserReducer.user;
  });
  // ****************************



  const [state, setState] = useState({
    firstName: "",
    lastName: '',
    email: '',
    institute: '',
    type: '',
    employeeCode: '',
    passingYear: '',
    companyName: '',
    designation: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  const backToDashBoard = () => {
    navigate('/')
  }

  const handleReset = () => {
    setState({
      firstName: "",
      lastName: '',
      email: '',
      institute: '',
      type: '',
      passingYear: '',
      employeeCode: '',
      companyName: '',
      designation: '',
    })
  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    const isValidate = await getValidation(dispatchForErr, validationAction, state);
    if (isValidate) {

      if (id) {
        const payload = {
          basicInfo: {
            id: reduxStore.basicInfo?.id,
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            user_id: reduxStore?.basicInfo?.user_id
          },
          academicInfo: [
            {
              id: reduxStore.academicInfo?.id,
              type: state.type,
              institute: state.institute,
              passingYear: state.passingYear,
              user_id: reduxStore?.academicInfo?.user_id
            }
          ],
          employementInfo: [
            {
              id: reduxStore?.employementInfo[0].id,
              employeeCode: state.employeeCode,
              companyName: state.companyName,
              designation: state.designation,
              user_id: reduxStore?.employementInfo[0].user_id
            }
          ]
        };

        updateUserDetails(payload).then((res) => {
          dispatch(res);
          console.log("success ", updatedReduxStore);
          // if (updatedReduxStore.payload.statusCode === 200) {

          // handleReset()
          toast.success("User updated successfully!", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          // alert('User updated successfully!');
          backToDashBoard();
          // setTimeout(() => {
          //   navigate('/')
          // }, 3000)
          //   } else {
          //     alert('Oops! something happend wrong');
          //   }
        });

      } else {
        const payload =
        {
          basicInfo:
          {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email
          },
          academicInfo:
            [{
              type: state.type,
              institute: state.institute,
              passingYear: state.passingYear
            }],
          employementInfo:
            [{
              employeeCode: state.employeeCode,
              companyName: state.companyName,
              designation: state.designation
            }]
        }
        const result = await axios.post("http://localhost:3000/api/user/", payload)
        console.log("======", result)
        if (result.status === 200) {
          handleReset()
          toast.success("User created", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
          setTimeout(() => {
            navigate('/')
          }, 3000)
        }
      }
      console.log("state",)

    }
  }



  useEffect(() => {
    if (id) {
      const updateForm = {
        firstName: reduxStore?.basicInfo && reduxStore?.basicInfo?.firstName,
        lastName: reduxStore?.basicInfo && reduxStore?.basicInfo?.lastName,
        email: reduxStore?.basicInfo && reduxStore?.basicInfo?.email,
        type: reduxStore?.academicInfo && reduxStore?.academicInfo[0]?.type,
        institute: reduxStore?.academicInfo && reduxStore?.academicInfo[0]?.institute,
        passingYear: reduxStore?.academicInfo && reduxStore?.academicInfo[0]?.passingYear,
        employeeCode: reduxStore?.employementInfo && reduxStore?.employementInfo[0]?.employeeCode,
        companyName: reduxStore?.employementInfo && reduxStore?.employementInfo[0]?.companyName,
        designation: reduxStore?.employementInfo && reduxStore?.employementInfo[0]?.designation,
      }
      setState(updateForm)
    }
  }, [id, reduxStore, updatedReduxStore])



  return (
    <div className="paper" >
      <form className="mainDiv" onSubmit={e => { handleSubmit(e) }} >
        <Grid container spacing={2}>
          <Card className="Card1">
            <h3>Basic Information</h3>

            <Grid item xs={12} >
              <TextField
                label="First Name"
                fullWidth
                // className="text"
                sx={{ margin: "20px" }}
                name="firstName"
                value={state.firstName}
                onChange={e => {

                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                }}
              />
              {stateForErr.firstName && <span className="validation-text">First Name is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last Name"
                name="lastName"
                sx={{ margin: "20px" }}
                fullWidth
                value={state.lastName}
                onChange={e => {

                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                }}
              />
              {stateForErr.lastName && <span className="validation-text">Last Name is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                sx={{ margin: "20px" }}
                type="email"
                fullWidth
                value={state.email}
                onChange={e => {
                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                  dispatchForErr(validationAction('isValidEmail',
                    e.target.value && e.target.value.length ?
                      validationUtility.email(e.target.value) ? false : true : false))
                }}
              />
              {stateForErr.email && <span className="validation-text">Email is required</span>}
              {stateForErr.isValidEmail && <span className="validation-text">Please Enter valid Email</span>}
            </Grid>
          </Card>
          <Card className="Card1">
            <Grid item xs={12}>
              <h3>Academic information </h3>
              <TextField
                id="select"
                label="Select highest Education"
                sx={{ margin: "20px" }}
                name='type'
                value={state.type}
                onChange={e => {
                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                }} fullWidth select>
                <MenuItem value="ssc">SSC</MenuItem>
                <MenuItem value="hsc">HSC</MenuItem>
                <MenuItem value="graduation">Graduation</MenuItem>
                <MenuItem value="post graduation">Post Graduation</MenuItem>
                <MenuItem value="MCA">MCA</MenuItem>
              </TextField>
              {console.log("state")}
              {stateForErr.type && <span className="validation-text">Education Type is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField label="School/College/University"
                name='institute'
                varient="outlined"
                sx={{ margin: "20px" }}
                fullWidth
                value={state.institute}
                onChange={e => {
                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                }} />
              {stateForErr.institute && <span className="validation-text">institute name is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Passing year"
                name="passingYear"
                sx={{ margin: "20px" }}
                type="number"
                varient="outlined"
                fullWidth
                value={state.passingYear}
                onChange={e => {
                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                  dispatchForErr(validationAction('isValidPassingYear', e.target.value.length > 4 ? true : false))
                }}

              />
              {stateForErr.passingYear && <span className="validation-text">passing year is required</span>}
              {stateForErr.isValidPassingYear && <span className="validation-text">Enter valid Passing year</span>}

            </Grid>
          </Card>
          <Card className="Card1">
            <Grid item xs={12}>
              <h3>Employment information  </h3>
              <TextField
                label="Employee code "
                name='employeeCode'
                sx={{ margin: "20px" }}
                fullWidth
                value={state.employeeCode}
                onChange={e => {
                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                }} />
              {stateForErr.employeeCode && <span className="validation-text">Employee code is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Company Name"
                fullWidth
                name="companyName"
                sx={{ margin: "20px" }}
                value={state.companyName}
                onChange={e => {

                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                }}
              />
              {stateForErr.companyName && <span className="validation-text">Company Name is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Designation"
                name='designation'
                sx={{ margin: "20px" }}
                fullWidth
                value={state.designation}
                onChange={e => {

                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                }}
              />
              {stateForErr.designation && <span className="validation-text">Designation is required</span>}
            </Grid>
          </Card>
          <Grid item xs={5.5}></Grid>

          <Grid item xs={2}>
            <Button variant="contained" type="reset" color="error" onClick={backToDashBoard} fullWidth>Cancel</Button>
          </Grid>

          <Grid item xs={2}>
            <Button variant="contained" type="submit" onClick={handleSubmit} fullWidth>{id ? "Update" : "Submit"}</Button>
          </Grid>


        </Grid>

      </form>
      <ToastContainer />
    </div>
  )
};

export default AddUser;