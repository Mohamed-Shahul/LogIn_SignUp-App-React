import React from "react";
import SignUpPage from "./components/SignUpPage";
import './App.css'
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
// import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
