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
  const [sortState, setSortState] = useState("");
  const [q, setQ] = useState("");
  const [searchParam] = useState(["firstName", "lastName", "email"]);
  const [filterParam, setFilterParam] = useState(["All"]);
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

  const onEditClick = (id) => {
    navigate(`/update/${id}`);
  }
  
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortState(event.target.value);
    if (event.target.value === "first name") {
      reduxStore.sort(function (a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      });
    } else if (event.target.value === "last name") {
      reduxStore.sort(function (a, b) {
        if (a.lastName < b.lastName) {
          return -1;
        }
        if (a.lastName > b.lastName) {
          return 1;
        }
        return 0;
      });
    } else if (event.target.value === "email") {
      reduxStore.sort(function (a, b) {
        if (a.email < b.email) {
          return -1;
        }
        if (a.email > b.email) {
          return 1;
        }
        return 0;
      });
    }
  };

  useEffect(() => {
    users().then((res) => {
      dispatch(res);
    });
  }, []);

  function search(items) {
    return items.filter((item) => {
 /*
 // in here we check if our region is equal to our c state
 // if it's equal to then only return the items that match
 // if not return All the countries
 */
    if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1
                     );
                 });
             } else if (filterParam == "All") {
                 return searchParam.some((newItem) => {
                     return (
                         item[newItem]
                             .toString()
                             .toLowerCase()
                             .indexOf(q.toLowerCase()) > -1
                     );
                 });
             }
         });
     }

  return (
    <>
      <Header buttonText="Add User" />
      <div className="container">
        <div className="input-container">
          <TextField
            id="standard-basic"
            label="Search Text"
            variant="standard"
            className="search-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
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
                <em value="All">None</em>
              </MenuItem>
              <MenuItem value="firstName">First Name</MenuItem>
              <MenuItem value="lastName">Last Name</MenuItem>
              <MenuItem value="email">Email</MenuItem>
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
              value={sortState}
              label="Select"
              onChange={handleSortChange}
              style={{ height: 40 }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="first name">First Name(A-Z)</MenuItem>
              <MenuItem value="last name">Last Name(A-Z)</MenuItem>
              <MenuItem value="email">Email(A-Z)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <Grid container justifyContent="start" spacing={1}>
        {search(reduxStore).map((row) => (
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
                    <IconButton onClick={() => onViewClick(row.id)}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton className="icon" onClick={() => onEditClick(row.id)}>
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
