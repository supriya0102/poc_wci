import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { TextField, Grid, Button, MenuItem, Card, Paper, Box } from "@mui/material";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getUserDetails, updateUserDetails } from "../../store/home/HomeAction";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";


const UpdateUser = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    getUserDetails(id).then((res) => {
      dispatch(res);
    });
  }, [dispatch]);

  const reduxStore = useSelector((state) => {
    return state.userDetailReducer.user;
  });

  const [formData, setFormData] = useState({
    firstName: reduxStore?.basicInfo && reduxStore?.basicInfo?.firstName,
    lastName: reduxStore?.basicInfo && reduxStore?.basicInfo?.lastName,
    email: reduxStore?.basicInfo && reduxStore?.basicInfo?.email,
    type: reduxStore?.academicInfo && reduxStore?.academicInfo[0]?.type,
    institute: reduxStore?.academicInfo && reduxStore?.academicInfo[0]?.institute,
    passingYear: reduxStore?.academicInfo && reduxStore?.academicInfo[0]?.passingYear,
    employeeCode: reduxStore?.employementInfo && reduxStore?.employementInfo[0]?.employeeCode,
    companyName: reduxStore?.employementInfo && reduxStore?.employementInfo[0]?.companyName,
    designation: reduxStore?.employementInfo && reduxStore?.employementInfo[0]?.designation,
  });

  const navigate = useNavigate();
  const updatedReduxStore = useSelector((state) => {
    return state.updateUserReducer.user;
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const { firstName, lastName, email, type, institute, passingYear, employeeCode, companyName, designation } = formData;
  const onSubmitHandler = () => {
    console.log(formData);
    const payload = {
      basicInfo: {
        id: reduxStore.basicInfo?.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        user_id: reduxStore?.basicInfo?.user_id
      },
      academicInfo: [
        {
          id: reduxStore.academicInfo?.id,
          type: formData.type,
          institute: formData.institute,
          passingYear: formData.passingYear,
          user_id: reduxStore?.academicInfo?.user_id
        }
      ],
      employementInfo: [
        {
          id: reduxStore?.employementInfo[0].id,
          employeeCode: formData.employeeCode,
          companyName: formData.companyName,
          designation: formData.designation,
          user_id: reduxStore?.employementInfo[0].user_id
        }
      ]
    };

    updateUserDetails(payload).then((res) => {
      dispatch(res);
      console.log("success ", res);
      if (updatedReduxStore.payload.statusCode === 201) {
        alert('User updated successfully!');
        navigate("/");
      } else {
        alert('Oops! something happend wrong');
      }
    });
  }

  return (
    <div className="paper" >
      <Grid container spacing={2}>
        <Card className="Card1">
          <h3>Besic Information</h3>
          <Grid item xs={10}>
            <TextField className="textfield" fullWidth id="outlined-basic" label="First Name" name="firstName"
              required={true} onChange={handleInputChange} value={firstName} type="text"
              variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="outlined-basic" label="Last Name" name="lastName"
              required={true} onChange={handleInputChange} value={lastName} type="text" variant="outlined" />

          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="outlined-basic" label="Email" name="email"
              required={true} onChange={handleInputChange} value={email} type="text" variant="outlined" />
          </Grid>
        </Card>
        <Card className="Card1">
          <h3>Academic information </h3>
          <Grid item xs={24}>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">Education</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select"
                value={type} name={"eduType"} label="Gender" onChange={handleInputChange}>
                <MenuItem value={""}>Select </MenuItem>
                <MenuItem value={"HSC"}>HSC</MenuItem>
                <MenuItem value={"Graduation"}>Graduation</MenuItem>
              </Select>
            </FormControl>
            <Grid item xs={12}>
              <TextField fullWidth id="outlined-basic" label="University/College" name="institute"
                required={true} onChange={handleInputChange} value={institute} type="text" variant="outlined" />

            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="outlined-basic" label="Passing Year" name="passingYear"
                required={true} onChange={handleInputChange} value={passingYear} type="text" variant="outlined" />

            </Grid>
          </Grid>
        </Card>
        <Card className="Card1">
          <h3>Employment information  </h3>
          <Grid item xs={12}>
            <TextField fullWidth id="outlined-basic" label="Employee Code" name="employeeCode"
              required={true} onChange={handleInputChange} value={employeeCode} type="text" variant="outlined" />

            <Grid item xs={12}>
              <TextField fullWidth id="outlined-basic" label="Company Name" name="companyName"
                required={true} onChange={handleInputChange} value={companyName} type="text" variant="outlined" />

            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="outlined-basic" label="Desgination" name="designation"
                required={true} onChange={handleInputChange} value={designation} type="text" variant="outlined" />
            </Grid>
          </Grid>
        </Card>
        <Grid item xs={7.5}></Grid>

        <Grid item xs={2}>
          <Button variant="contained" type="reset" color="error" fullWidth>Cancel</Button>
        </Grid>

        <Grid item xs={2}>
          <Button variant="contained" type="submit" onClick={onSubmitHandler} fullWidth>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateUser;
