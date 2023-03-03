import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header(props) {
  return (
      <AppBar position="static">
        <Toolbar>
         <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Western Climate Initiative
          </Typography>
         <Link to="/adduser" style={{textDecoration:"none"}} ><Button  style={{color:"white",textDecoration:"none"}} >Add User</Button></Link> 
        </Toolbar>
      </AppBar>
  );
}

export default Header;