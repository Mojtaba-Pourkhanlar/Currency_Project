import { useEffect } from "react";
import { Header } from "../Header";
import Layout02 from "./layout02";
import Layout01 from "./layout01";

export const DashboardTap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title="dashboard" subtitle="dashboardDec" />

      <>
        <>
          <Layout01 />
        </>

        <>
          <Layout02 />
        </>
      </>
    </>
  );
};
