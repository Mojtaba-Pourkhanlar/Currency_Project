import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../components/afterLogin/Dashboard";
import { NotFound } from "../../once";

const AfterLogin = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to='/dashboard' />} />
        <Route path="*" element={<NotFound demo="dashboard" />} />
      </Routes>
    </div>
  );
};

export default AfterLogin;
