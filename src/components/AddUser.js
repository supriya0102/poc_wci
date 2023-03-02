import React,{useState,useEffect} from "react";
import "./AddUser.css";
import { TextField,Grid,Button,MenuItem, Card, Paper} from "@mui/material";
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


const handleChange = (e) => {
  const { name, value } = e.target;
  setState((prevState)=>({...prevState,[name]:value}));
}

  const getapi=async()=>{
    const payload=state
    const result=await axios.post("http://localhost:3000/api/user/",payload)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("state",state)
    getapi()
    
}

return(
  <div className="paper" >
    <form className="mainDiv" onSubmit={e=> {handleSubmit(e)}} >
      <Grid container spacing={2}>
      <Card className="Card1">
         <h3>Besic Information</h3>

          <Grid item xs={12}>
          <TextField
        label="First Name"
        fullWidth
        name="firstName"
        value={state.firstName}
        onChange={handleChange}
      />
          </Grid>
        <Grid item xs={12}>
        <TextField
        label="Last Name"
        name="lastName"

        fullWidth
        value={state.lastName}
        onChange={handleChange}
      />
        </Grid>
        <Grid item xs={12}>
        <TextField
        label="Email"
        name="email"

        fullWidth
        value={state.email}
        onChange={handleChange}
      />
        </Grid>
        </Card>
        <Card className="Card1">
        <Grid item xs={12}>
        <h3>Academic information </h3>
           <TextField id="select" label="Select highest Education"  onChange={handleChange} fullWidth select>
             <MenuItem value="ssc">SSC</MenuItem>
             <MenuItem value="hsc">HSC</MenuItem>
             <MenuItem value="graduation">Graduation</MenuItem>
             <MenuItem value="post graduation">Post Graduation</MenuItem>
          </TextField>
        </Grid>
        
        <Grid item xs={12}>
           <TextField label="School/College/University" varient="outlined" fullWidth value={state.college} onChange={handleChange}/>
        </Grid>
        <Grid item xs={12}>
           <TextField type="date" varient="outlined" fullWidth onChange={handleChange} />
        </Grid>
        </Card>
        <Card className="Card1">
        <Grid item xs={12}>
        <h3>Employment information  </h3>
           <TextField  label="Employee code " fullWidth value={state.employeeCode} onChange={handleChange} />
       </Grid>
        <Grid item xs={12}>
        <TextField
        label="Company Name"
        fullWidth
        value={state.companyName}
        onChange={handleChange}
      />
        </Grid>
        <Grid item xs={12}>
        <TextField
        label="Designation"
        fullWidth
        value={state.designation}
        onChange={handleChange}
      />
        </Grid>
        </Card>
        <Grid item xs={7.5}></Grid>
        
        <Grid item xs={2}>
        <Button variant="contained" type="reset" color="error"  fullWidth>Cancel</Button>
        </Grid>

        <Grid item xs={2}>
        <Button variant="contained" type="submit" onClick={handleSubmit} fullWidth>Submit</Button>
        </Grid>


      </Grid>
     
    </form>
    </div>
)};

export default AddUser;