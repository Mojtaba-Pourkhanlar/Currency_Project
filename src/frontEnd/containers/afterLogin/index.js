import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../components/afterLogin/Dashboard";

const AfterLogin = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default AfterLogin;
