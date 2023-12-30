/* eslint-disable no-console */
/* eslint-disable quotes */
import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";

const Profile = () => {
  const { user } = useSelector(userSelector);
  console.log("Profile");
  return <div>{user.username}</div>;
};

export default Profile;
