import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DasboardData } from "../../context/Dahsboard";
import { SpeedDialDrop } from "../../once";
import { Header } from "./components/header";
import { SideBar } from "./components/Sidebar/SideBar";
import { getAllCoins, getAllMarkets } from "../../services/api";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [allMarekts, setAllMarkets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await getAllCoins();
      const { data: markets } = await getAllMarkets();
      setCoins(data);
      setAllMarkets(markets);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
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
        allMarekts,
        setAllMarkets,
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
