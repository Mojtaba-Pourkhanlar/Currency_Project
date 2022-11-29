import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DasboardData } from "../../context/Dahsboard";
import { SpeedDialDrop } from "../../once";
import { Header } from "./components/header";
import { SideBar } from "./components/Sidebar/SideBar";
import { getAllCoins } from "../../services/api";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getAllCoins();
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);



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
        coins,
        setCoins,
        loading,
        setLoading,
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
