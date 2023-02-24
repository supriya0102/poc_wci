import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
  return (
      <AppBar position="static">
        <Toolbar>
         <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Western Climate Initiative
          </Typography>
          <Button color="inherit">Add User</Button>
        </Toolbar>
      </AppBar>
  );
}

export default Header;