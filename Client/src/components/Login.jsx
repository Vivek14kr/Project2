import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "./AuthContext"

export const Login = () => {
  const {
    isAuth,
    email,
    password,
    register,
    setEmail,
    setRegister,
    setPassword,
    toggleAuth,
    login,
    token,
    handleLogin,
  } = useContext(AuthContext);
  
  return (
    <div>
      <h1 >Sign in</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           />{" "}
        <br />
        <input
          type="submit"
          value="Login"
           />
      </form>
      <Link to={"/signup"} >
        Create account
      </Link>
    </div>
  );
};
