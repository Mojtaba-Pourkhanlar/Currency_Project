import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "../../components/beforeLogin/Landing";
import CoinID from "../../components/beforeLogin/tabel/CoinID";
import { NotFound } from "../../once";
import { Login } from "../authentication/Login";
import { Register } from "../authentication/Registre";

const BeforeLogin = () => {
  return (
    <>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coin/:id" element={<CoinID />} />
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="*" element={<NotFound demo="landing" />} />
      </Routes>
    </>
  );
};

export default BeforeLogin;
