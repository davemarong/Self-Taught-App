import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function usePushDataToServer() {
  const userProfileData = useSelector((state) => state.userProfileData);

  const { id } = userProfileData;

  const updateMainSubjectsInServer = async (newSubject) => {
    await axios
      .put(
        `https://self-taught-web-dev.herokuapp.com/users/${id}`,
        {
          mainSubjects: newSubject,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  const updateSecondarySubjectsInServer = async (newSubject) => {
    await axios
      .put(
        `https://self-taught-web-dev.herokuapp.com/users/${id}`,
        {
          secondarySubjects: newSubject,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  const updateProjectsInServer = async (projects) => {
    await axios
      .put(
        `https://self-taught-web-dev.herokuapp.com/users/${id}`,
        {
          projects: projects,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return {
    updateMainSubjectsInServer,
    updateSecondarySubjectsInServer,
    updateProjectsInServer,
  };
}
