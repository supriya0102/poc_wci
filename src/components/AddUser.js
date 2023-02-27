import React,{useState,useEffect} from "react";
import "./AddUser.css";
import { TextField,Grid,Button,MenuItem} from "@mui/material";
import axios from "axios";

const AddUser=({userId})=>{

    const [firstName,setFirstName]=useState("")
    const [user,setUser]=useState([])
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
console.log("state",state)

const handleChange = (e) => {
  const { name, value } = e.target;
  setState((prevState)=>({...prevState,[name]:value}));
}
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await axios.get(`api/user/${userId}`);
  //       const { basicInfo, academicInfo, employementInfo } = response.data;
  //       setFirstName(basicInfo.firstName);
  //       setLastName(basicInfo.lastName);
  //       setEmail(basicInfo.email);
  //       setEducationType(academicInfo[0].type);
  //       setCollege(academicInfo[0].college);
  //       setPassingYear(academicInfo[0].passingYear);
  //       setEmployeeCode(employementInfo[0].employeeCode);
  //       setCompanyName(employementInfo[0].companyName);
  //       setDesignation(employementInfo[0].designation);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchUserData();
  // }, [userId]);

//   const handleSubmit = async (e) => {
  const handleSubmit =  (e) => {
    e.preventDefault();
   
    // try {
    //   await axios.put(`api/user/${userId}`, {
    //     basicInfo: {
    //       firstName,
    //       lastName,
    //       email,
    //     },
    //     academicInfo: [{
    //       passingYear,
    //     }],
    //     employementInfo: [{
    //       employeeCode,
    //       companyName,
    //       designation,
    //     }],
      };
  //     console.log('User data updated successfully');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
 

return(
    <form className="mainDiv" onSubmit={e=> {handleSubmit(e)}} >
         <h3>Besic Information</h3>
      <Grid container spacing={2}>

          <Grid item xs={9}>
          <TextField
        label="First Name"
        fullWidth
        name="firstName"
        value={state.firstName}
        // onChange={e=>setFirstName(e.target.value)}
        onChange={handleChange}
      />
          </Grid>
        <Grid item xs={9}>
        <TextField
        label="Last Name"
        name="lastName"

        fullWidth
        value={state.lastName}
        onChange={handleChange}
      />
        </Grid>
        <Grid item xs={9}>
        <TextField
        label="Email"
        name="email"

        fullWidth
        value={state.email}
        onChange={handleChange}
      />
        </Grid>
        
        <Grid item xs={9}>
        <h3>Academic information </h3>
           <TextField id="select" label="Select highest Education"  onChange={handleChange} fullWidth select>
             <MenuItem value="ssc">SSC</MenuItem>
             <MenuItem value="hsc">HSC</MenuItem>
             <MenuItem value="graduation">Graduation</MenuItem>
             <MenuItem value="post graduation">Post Graduation</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={9}>
           <TextField label="School/College/University" varient="outlined" fullWidth value={state.college} onChange={handleChange}/>
        </Grid>
        <Grid item xs={9}>
           <TextField type="date" varient="outlined" fullWidth onChange={handleChange} />
        </Grid>

        <Grid item xs={9}>
        <h3>Employment information  </h3>
           <TextField  label="Employee code " fullWidth value={state.employeeCode} onChange={handleChange} />
       </Grid>
        <Grid item xs={9}>
        <TextField
        label="Company Name"
        fullWidth
        value={state.companyName}
        onChange={handleChange}
      />
        </Grid>
        <Grid item xs={9}>
        <TextField
        label="Designation"
        fullWidth
        value={state.designation}
        onChange={handleChange}
      />
        </Grid>
        <Grid item xs={4}></Grid>
        
        <Grid item xs={4.5}>
        <Button variant="contained" type="submit" onClick={handleSubmit} fullWidth>Submit</Button>
        </Grid>
        <Grid item xs={4.5}>
        <Button variant="contained" type="reset" color="error"  fullWidth>Cancel</Button>
        </Grid>


      </Grid>
     
    </form>
)};

export default AddUser;