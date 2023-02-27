import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "avataaars";
import "./profilepage.css";
import data from './data.json'

const ProfilePage = () => {

  // useEffect(() =>{
  //     getUserDetails();
  // },[])

  // const getUserDetails = async() =>{
  //   let result = await fetch('http://localhost:3000/api/user/{param}');
  //   result = result.json();
  //   log
  // }

  return (
    <div className="container">
    <div className="outer-container">
    {console.log(data)}
      <Card sx={{ maxWidth: 650 }}>
        <div className="header-container">
          <div className="image-container">
            <Avatar
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
            />
          </div>
          <div className="title-container">
            <h1>{data.basicInfo.firstName}</h1>
            <h4>{data.basicInfo.lastName}</h4>
          </div>
        </div>
        <Card sx={{ minWidth: 275, background: "#f3f0f0", margin: "20px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Personal Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4>First Name: {data.basicInfo.firstName}</h4>
              <h4>Last Name: {data.basicInfo.lastName} </h4>
              <h4>Email: {data.basicInfo.email}</h4>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, background: "#f3f0f0", margin: "20px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Academic Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h4>Education: {data.academicInfo[0].type}  </h4>
              <h4>School/College/University: {data.academicInfo[0].institute} </h4>
              <h4>Passing Year:{data.academicInfo[0].passingYear}</h4>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, background: "#f3f0f0", margin: "20px" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Employment Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <h4>Employee Code: {data.employementInfo[0].employeeCode}</h4>
              <h4>Company Name: {data.employementInfo[0].companyName} </h4>
              <h4>Designation: {data.employementInfo[0].designation} </h4>
            </Typography>
          </CardContent>
        </Card>
      </Card>
    </div>
    </div>
  );
};

export default ProfilePage;
