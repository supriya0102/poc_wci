import React, { useEffect, useState } from 'react';
import "./AddUser.css"
import { TextField, Button, Grid, Card } from '@mui/material';
import { getUserDetails, updateUserDetails } from '../store/home/HomeAction';
import { useSelector } from 'react-redux';
// import { validationAction, validationReducer } from "../../utils/validation";
// import { getValidation } from "./validationCheck";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';



function AddUserForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getUserDetails(id).then((res) => {
      dispatch(res);
    });
  }, [dispatch]);

  const reduxStore = useSelector((state) => {
    return state.userDetailReducer.user;
  });

  const updatedReduxStore = useSelector((state) => {
    return state.updateUserReducer.user;
  });
  // ****************************
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eduType: '',
    institute: '',
    passingYear: '',
    employeeCode: '',
    companyName: '',
    designation: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      eduType: '',
      institute: '',
      passingYear: '',
      employeeCode: '',
      companyName: '',
      designation: ''
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
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

    } else {

      const payload = {
        basicInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email
        },
        academicInfo: [
          {
            type: formData.eduType,
            institute: formData.institute,
            passingYear: formData.passingYear
          }
        ],
        employementInfo: [
          {
            employeeCode: formData.employeeCode,
            companyName: formData.companyName,
            designation: formData.designation
          }
        ]
      };

      fetch("http://localhost:3000/api/user/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then((response) => {
          if (response.ok) {
            alert('User added successfully!');
          } else {
            alert('Error adding user!');
          }
        });
    }

  };


  // =====================================================







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
      setFormData(updateForm)
    }
  }, [id])



  return (
    <div className='paper'>
      <form className='mainDiv' onSubmit={handleSubmit}>
        <React.Fragment container spacing={3} >
          <Grid container spacing={2}>

            <Card className='Card1'>
              <h3>Besic Information</h3>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="First Name"

                  value={formData.firstName}
                  onChange={handleChange}
                /></Grid>

              <Grid item xs={8}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                /></Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                /></Grid>
            </Card>
          </Grid>

          <Card className='Card1'>
            <h3>Academic Information</h3>
            <Grid item xs={8}>
              <TextField
                label="Education Type"
                value={formData.eduType}
                onChange={handleChange}
              /></Grid>
            <Grid item xs={8}>
              <TextField
                label="Institute Name"
                value={formData.institute}
                onChange={handleChange}
              /></Grid>
            <Grid item xs={8}>
              <TextField
                type="date"
                label="Passing Year"
                value={formData.passingYear}
                onChange={handleChange}
              /></Grid>

          </Card>

          <Card className='Card1'>
            <Grid item xs={8}>
              <h3>Employment Information</h3>
              <TextField
                label="Employee Code"
                value={formData.employeeCode}
                onChange={handleChange}
              /></Grid>
            <Grid item xs={8}>
              <TextField
                label="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              /></Grid>
            <Grid item xs={8}>
              <TextField
                label="Designation"
                value={formData.designation}
                onChange={handleChange}
              /></Grid>
          </Card>
          {/* <Grid xs={5}></Grid> */}
          <Grid item xs={4}> <Button variant="contained" color="error" type="reset" onClick={handleReset}>Cancel</Button> </Grid>
          <Grid item xs={4}> <Button variant="contained" color="primary" type="submit">Submit</Button></Grid>
        </React.Fragment>
      </form>
    </div>
  );
}

export default AddUserForm;
