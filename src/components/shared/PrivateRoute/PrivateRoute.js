import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import "./PrivateRoute.css";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  //   রিলোড মারলে যেন লগ ইন পেজে না নিয়ে যাই এজন্য spinner ব্যবহার করেছি এখানে
  if (isLoading) {
    return (
      <div className="spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
  //
  if (user.email) {
    return children;
  }
  return <Navigate to="/register" state={{ from: location }} />;
};

export default PrivateRoute;
