import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Avatar from "avataaars";
import "./index.css";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../store/home/HomeAction";
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
  return (
    <div className="container">
      <div className="outer-container">
        <Card sx={{ maxWidth: 650 }}>
          <div className="header-container">
            <div className="image-container">
              {/* <Avatar
                style={{ width: "100px", height: "100px" }}
                avatarStyle="Circle"
                topType="ShortHairShortFlat"
                accessoriesType="Blank"
                hairColor="Brown"
                facialHairType="Blank"
                clotheType="Hoodie"
                clotheColor="Blue03"
                eyeType="Default"
                eyebrowType="Default"
                mouthType="Smile"
                skinColor="Pale"
              /> */}
            </div>
            <div className="title-container">
              <h1>{reduxStore?.basicInfo?.firstName}</h1>
              <h1>{reduxStore?.basicInfo?.lastName}</h1>
            </div>
          </div>
          <Card sx={{ minWidth: 275, background: "#f3f0f0", margin: "20px" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component={"span"}>
                Personal Information
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
                <h4>Passing Year:{reduxStore?.academicInfo?.[0]?.passingYear}</h4>
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
                  Employee Code: {reduxStore?.employementInfo?.[0]?.employeeCode}
                </h4>
                <h4>
                  Company Name: {reduxStore?.employementInfo?.[0]?.companyName}{" "}
                </h4>
                <h4>Designation: {reduxStore?.employementInfo?.[0]?.designation} </h4>
              </Typography>
            </CardContent>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
