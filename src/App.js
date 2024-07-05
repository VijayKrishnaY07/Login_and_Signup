import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./components/privateroute";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={Signup} />
          <Route path="/signup" Component={Signup} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={Dashboard} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
