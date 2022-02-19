import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));

  return user && user.token ? (
    <Routes>
      {" "}
      <Route {...rest} />{" "}
    </Routes>
  ) : (
    <LoadingToRedirect />
  );
};

export default UserRoute;
