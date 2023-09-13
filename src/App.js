import React from "react";
import SignUpPage from "./components/SignUpPage";
import './App.css'
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { Container,Paper } from "@mui/material";


function App() {
  return (
    <div className="App">
      <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100vh'
      }}>
      <Routes>
        <Route path="/" element={<SignUpPage/>} /> 
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
      </Container>
    </div>
  );
}

export default App;
