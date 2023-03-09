import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import "./index.css";
import { useParams, useNavigate } from "react-router-dom";
import { getUserDetails } from "../../store/home/HomeAction";
import Header from "../header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const ProfilePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reduxStore = useSelector((state) => {
    return state.userDetailReducer.user;
  });
  const navigate = useNavigate();
  useEffect(() => {
    getUserDetails(id).then((res) => {
      dispatch(res);
    });
  }, [dispatch]);

  

  const colors = ["#fcba03", "#2596be", "#e28743", "#154c79", "#873e23"];
  const rgb = colors[Math.floor(Math.random() * colors.length)];
  return (
    <>
      <Header buttonText="Back"/>
      <div className="profile-card-container">
        <Card sx={{ minWidth: 275 }} className="main-card">
          <CardContent className="card-meta-container">
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item justifyContent="space-between">
                <Avatar
                  sx={{
                    bgcolor: `${rgb}`,
                    width: "120px",
                    height: "120px",
                  }}
                >
                  {reduxStore?.basicInfo?.firstName.charAt(0)}{" "}
                  {reduxStore?.basicInfo?.lastName.charAt(0)}
                </Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>
                  <h1 className="title">
                    {reduxStore?.basicInfo?.firstName}{" "}
                    {reduxStore?.basicInfo?.lastName}
                  </h1>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component={"span"}
            style={{ margin: "10px" }}
          >
            Personal Information
          </Typography>
          <CardContent className="card-meta-container">
            <Grid container wrap="nowrap" spacing={2}>
              <Card sx={{ minWidth: 400 }}>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component={"div"}
                  >
                    <h4>First Name: {reduxStore?.basicInfo?.firstName}</h4>
                    <h4>Last Name: {reduxStore?.basicInfo?.lastName} </h4>
                    <h4>Email: {reduxStore?.basicInfo?.email}</h4>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component={"span"}
            style={{ margin: "10px" }}
          >
            Academic Information
          </Typography>
          <CardContent className="card-meta-container">
            <Grid container wrap="nowrap" spacing={2}>
              <Card sx={{ minWidth: 400 }}>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component={"div"}
                  >
                    <h4>Education: {reduxStore?.academicInfo?.[0]?.type} </h4>
                    <h4>
                      School/College/University:{" "}
                      {reduxStore?.academicInfo?.[0]?.institute}
                    </h4>
                    <h4>
                      Passing Year:{reduxStore?.academicInfo?.[0]?.passingYear}
                    </h4>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component={"span"}
            style={{ margin: "10px" }}
          >
            Employement Information
          </Typography>
          <CardContent className="card-meta-container">
            <Grid container wrap="nowrap" spacing={2}>
              <Card sx={{ minWidth: 400 }}>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component={"div"}
                  >
                    <h4>
                      Employee Code:{" "}
                      {reduxStore?.employementInfo?.[0]?.employeeCode}
                    </h4>
                    <h4>
                      Company Name:{" "}
                      {reduxStore?.employementInfo?.[0]?.companyName}{" "}
                    </h4>
                    <h4>
                      Designation:{" "}
                      {reduxStore?.employementInfo?.[0]?.designation}{" "}
                    </h4>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProfilePage;
