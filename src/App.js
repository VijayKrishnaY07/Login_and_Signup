import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to Registration Form</h1>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
