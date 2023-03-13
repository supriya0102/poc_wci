import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import {
  IconButton,
  Avatar,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { users } from "../../store/home/HomeAction";
import { useNavigate, Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import "./home.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function Home() {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => state.usersReducer.users);
  const navigate = useNavigate();
  console.log(reduxStore);

  const colors = [
    "blanchedalmond",
    "chocolate",
    "darkgray",
    "darkseagreen",
    "orange",
  ];

  const onViewClick = (id) => {
    console.log(id);
    navigate(`/profile/${id}`);
  };
  const handleChange = (event) => {
    setState(event.target.value);
  };

  useEffect(() => {
    users().then((res) => {
      dispatch(res);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="input-container">
          <TextField
            id="standard-basic"
            label="Search Text"
            variant="standard"
            className="search-input"
          />
        </div>
        <div className="select-container">
          <Typography style={{ marginLeft: 10 }}>Filter Field</Typography>
          <FormControl sx={{ m: 1, minWidth: 120, minHeight: 10 }}>
            <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={state}
              label="Select"
              style={{ height: 40 }}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>First Name(a-z)</MenuItem>
              <MenuItem value={20}>Last Name(a-z)</MenuItem>
              <MenuItem value={30}>Email(a-z)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="select-container">
          <Typography style={{ marginLeft: 10 }}>Sort By</Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={state}
              label="Select"
              onChange={handleChange}
              style={{ height: 40 }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>First Name</MenuItem>
              <MenuItem value={20}>Last Name</MenuItem>
              <MenuItem value={30}>Email</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <Grid container justifyContent="start" spacing={1}>
        {reduxStore.map((row) => (
          <Grid key={row.id} item>
            <div className="card-container">
              <div className="per-card-1">
                <div className="card-image">
                  <Avatar
                    sx={{
                      bgcolor: `${
                        colors[Math.floor(Math.random() * colors.length)]
                      }`,
                      width: "150px",
                      height: "150px",
                      marginLeft: "32px",
                    }}
                  >
                    {row.firstName.charAt(0)} {row.lastName.charAt(0)}
                  </Avatar>
                </div>
                <div className="card-content">
                  <div className="card-title">
                    {row.firstName} {row.lastName}
                  </div>
                  <div className="per-position">{row.email} </div>
                  <div className="icon-container">
                    <IconButton onClick={() =>onViewClick(row.id)}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton className="icon">
                      <Edit></Edit>
                    </IconButton>
                    <IconButton>
                      <RestoreFromTrashIcon></RestoreFromTrashIcon>
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;
