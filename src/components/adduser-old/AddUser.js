import React, { useReducer, useState } from "react";
import './AddUser.css'
import { TextField, Grid, Button, MenuItem, Card } from "@mui/material";
import { validationAction, validationReducer } from "../../utils/validation";
import { getValidation } from "./validationCheck";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const userErrState = {
  firstName: false,
  lastName: false,
  email: false,
  college: false,
  educationType: false,
  passingYear: false,
  employeeCode: false,
  companyName: false,
  designation: false,
};

const AddUser = ({ userId }) => {
  const navigate = useNavigate()
  const [stateForErr, dispatchForErr] = useReducer(validationReducer, userErrState)
  // const [firstName,setFirstName]=useState("")
  // const [user,setUser]=useState([])
  const [state, setState] = useState({
    firstName: "",
    lastName: '',
    email: '',
    college: '',
    educationType: '',
    passingYear: '',
    employeeCode: '',
    companyName: '',
    designation: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValidate = await getValidation(dispatchForErr, validationAction, state);
    if (isValidate) {
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
            type: state.educationType,
            institute: state.college,
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
        setState({
          firstName: "",
          lastName: '',
          email: '',
          college: '',
          educationType: '',
          passingYear: '',
          employeeCode: '',
          companyName: '',
          designation: '',
        })
        toast.success("User created", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }
    }
    console.log("state", state)

  }



  return (
    <div className="paper" >
      <form className="mainDiv" onSubmit={e => { handleSubmit(e) }} >
        <Grid container spacing={2}>
          <Card className="Card1">
            <h3>Besic Information</h3>

            <Grid item xs={12}>
              <TextField
                label="First Name"
                fullWidth
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
                type="email"
                fullWidth
                value={state.email}
                onChange={e => {handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                }}
              />
              {stateForErr.email && <span className="validation-text">Email is required</span>}
            </Grid>
          </Card>
          <Card className="Card1">
            <Grid item xs={12}>
              <h3>Academic information </h3>
              <TextField
                id="select"
                label="Select highest Education"
                name='educationType'
                value={state.educationType}
                onChange={e => {
                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                }} fullWidth select>
                <MenuItem value="ssc">SSC</MenuItem>
                <MenuItem value="hsc">HSC</MenuItem>
                <MenuItem value="graduation">Graduation</MenuItem>
                <MenuItem value="post graduation">Post Graduation</MenuItem>
              </TextField>
              {stateForErr.educationType && <span className="validation-text">Education Type is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField label="School/College/University"
                name='college'
                varient="outlined"
                fullWidth
                value={state.college}
                onChange={e => {
                  handleChange(e)
                  dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
                }} />
              {stateForErr.college && <span className="validation-text">college is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
              label="Passing year"
              name="passingYear"
              varient="outlined"
              fullWidth
              value={state.passingYear}
              onChange={e => {
                handleChange(e)
                dispatchForErr(validationAction(e.target.name, e.target.value ? false : true))
              }}

              />
              {stateForErr.passingYear && <span className="validation-text">passing year is required</span>}
            </Grid>
          </Card>
          <Card className="Card1">
            <Grid item xs={12}>
              <h3>Employment information  </h3>
              <TextField
                label="Employee code "
                name='employeeCode'
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
            <Button variant="contained" type="reset" color="error" fullWidth>Cancel</Button>
          </Grid>

          <Grid item xs={2}>
            <Button variant="contained" type="submit" onClick={handleSubmit} fullWidth>Submit</Button>
          </Grid>


        </Grid>

      </form>
      <ToastContainer />
    </div>
  )
};

export default AddUser;