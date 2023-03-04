import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Avatar from "avataaars";
import "./profilepage.css";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const [user, setuser] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getUserDetails = async () => {
      let result = await fetch(`http://localhost:3000/api/user/${id}`);
      result = await result.json();
      setuser(result);
    };
    getUserDetails();
  }, [id]);

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
              <h1>{user?.basicInfo?.firstName}</h1>
              <h1>{user?.basicInfo?.lastName}</h1>
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
                <h4>First Name: {user?.basicInfo?.firstName}</h4>
                <h4>Last Name: {user?.basicInfo?.lastName} </h4>
                <h4>Email: {user?.basicInfo?.email}</h4>
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
                <h4>Education: {user?.academicInfo?.[0]?.type} </h4>
                <h4>
                  School/College/University:{" "}
                  {user?.academicInfo?.[0]?.institute}
                </h4>
                <h4>Passing Year:{user?.academicInfo?.[0]?.passingYear}</h4>
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
                  Employee Code: {user?.employementInfo?.[0]?.employeeCode}
                </h4>
                <h4>
                  Company Name: {user?.employementInfo?.[0]?.companyName}{" "}
                </h4>
                <h4>Designation: {user?.employementInfo?.[0]?.designation} </h4>
              </Typography>
            </CardContent>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
