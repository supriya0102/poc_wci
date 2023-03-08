import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Avatar} from "@mui/material";
import "./index.css";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../store/home/HomeAction";
import Header from "../header/Header";

const ProfilePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getUserDetails(id).then((res) => {
      dispatch(res);
    });
  }, [dispatch]);
  const reduxStore = useSelector((state) => {
    return state.userDetailReducer.user;
  });
  const colors = ['#fcba03', '#2596be', '#e28743', '#154c79', '#873e23'];
  const rgb = colors[Math.floor(Math.random() * colors.length)];
  return (
    <>
    <Header/>
    <div className="profile-container">
      <div className="outer-container">
        <Card sx={{ maxWidth: 650 }}>
          <div className="header-container">
            <div className="image-container">
              <Avatar
                sx={{
                  bgcolor: `${rgb}`,
                  width: "120px",
                  height: "120px",
                }}
              >
                {reduxStore?.basicInfo?.firstName.charAt(0)} {reduxStore?.basicInfo?.lastName.charAt(0)}
              </Avatar>
            </div>
            <div className="title-container">
              <h1 className="title">
                {reduxStore?.basicInfo?.firstName}{" "}
                {reduxStore?.basicInfo?.lastName}
              </h1>
              <h1></h1>
            </div>
          </div>
          <Card sx={{ minWidth: 275, background: "#f3f0f0", margin: "20px" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component={"span"}>
              <Typography gutterBottom variant="h5" component={"span"}>Personal Information</Typography>
              </Typography>
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
          <Card sx={{ minWidth: 275, background: "#f3f0f0", margin: "20px" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component={"span"}>
                Academic Information
              </Typography>
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
          <Card sx={{ minWidth: 275, background: "#f3f0f0", margin: "20px" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component={"span"}>
                Employment Information
              </Typography>
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
                  Company Name: {reduxStore?.employementInfo?.[0]?.companyName}{" "}
                </h4>
                <h4>
                  Designation: {reduxStore?.employementInfo?.[0]?.designation}{" "}
                </h4>
              </Typography>
            </CardContent>
          </Card>
        </Card>
      </div>
    </div>
    </> 
  );
};

export default ProfilePage;
