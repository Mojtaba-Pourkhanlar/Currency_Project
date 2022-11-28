import { Container } from "@mui/material";
import React, { useState } from "react";
import { DasboardData } from "../../context/Dahsboard";
import { SpeedDialDrop } from "../../once";
import { Header } from "./components/header";
import { SideBar } from "./components/Sidebar/SideBar";

const Dashboard = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };

  return (
    <DasboardData.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
      }}>
      <div>
        <Header />
        <Container maxWidth="xl">
          <SideBar />
        </Container>
        <SpeedDialDrop />
      </div>
    </DasboardData.Provider>
  );
};

export default Dashboard;
