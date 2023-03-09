import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header({buttonText}) {
  return (
      <AppBar position="static">
        <Toolbar>
         <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Western Climate Initiative
          </Typography>
         <Link to={`/${buttonText === "Add User" ? 'adduser':''}`} style={{textDecoration:"none"}} ><Button  style={{color:"white",textDecoration:"none"}} >{buttonText}</Button></Link> 
        </Toolbar>
      </AppBar>
  );
}

export default Header;