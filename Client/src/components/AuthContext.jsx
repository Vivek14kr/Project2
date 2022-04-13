import { createContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AuthContext = createContext({isAuth:false,
  token:"",
  register:false,
  email:"",
  password:"",
  login:()=>{},
  handleLogin:()=>{}
});

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


 const handleLogin = async (e) => {
   e.preventDefault();

   const res = await fetch("http://localhost:4200/login", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       email,
       password,
     }),
   });
   const data = await res.json();

   if (data.user) {
     localStorage.setItem("token", data.token);
      setIsAuth(true);
     navigate("/dashboard");

   } else {
     alert("Please check email and password");
      setIsAuth(false);
   }
 };
 
  return (
    <AuthContext.Provider
      value={{ isAuth,email, password, register, setEmail, setRegister, setPassword, token, handleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
