import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import AddUser from "./AddUser";
import { Link,Route } from "react-router-dom";

function Header(props) {
  return (
      <AppBar position="static">
        <Toolbar>
         <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Western Climate Initiative
          </Typography>
         <Link to="/AddUser"  ><Button color="inherit" >Add User</Button></Link> 
        </Toolbar>
      </AppBar>
  );
}

export default Header;