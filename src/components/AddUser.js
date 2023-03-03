import React, { useState } from 'react';
import "./AddUser.css"
import { TextField,Button,Grid,Card } from '@mui/material';


function AddUserForm() {
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
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
      
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
  };

  return (
    <div className='paper'>
    <form className='mainDiv' onSubmit={handleSubmit}>
      <React.Fragment container spacing={3} display="flex" flexDirection="column" alignItems="center">
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
       <Grid> <Button variant="contained" color="error" type="reset" onClick={handleReset}>Cancel</Button> </Grid>
       <Grid item xs={4}> <Button variant="contained" color="primary" type="submit">Submit</Button></Grid>
      </React.Fragment>
    </form>
    </div>
  );
}

export default AddUserForm;
