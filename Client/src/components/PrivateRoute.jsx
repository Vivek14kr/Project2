import { useContext } from "react";
import { useSelector } from "react-redux";

import { useNavigate, Navigate } from "react-router-dom";

import { AuthContext } from "./AuthContext";
export const PrivateRoute = ({ children }) => {
  const { isAuth} = useContext(AuthContext) ;

  const navigate = useNavigate();
  if (!isAuth) {
    return <Navigate to={"/"} />;
  }
  return children;
};
