import { useEffect } from "react";
import { Header } from "../Header";
import Layout02 from "./layout02";
import Layout01 from "./layout01";
import Layout03 from "./layout03";

export const DashboardTap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title="dashboard" subtitle="dashboardDec" />

      <Layout01 />
      <Layout02 />
      <Layout03 />
    </>
  );
};
