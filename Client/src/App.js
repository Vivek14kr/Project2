import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { Register } from "./components/Register";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/" element={<Login />}></Route>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Home />{" "}
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
