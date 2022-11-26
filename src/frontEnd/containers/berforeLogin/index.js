import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../../components/beforeLogin/Landing";
import { Login } from "../authentication/Login";
import { Register } from "../authentication/Registre";

const BeforeLogin = () => {
  return (
    <>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/landing" />} />
      </Routes>
    </>
  );
};

export default BeforeLogin;
