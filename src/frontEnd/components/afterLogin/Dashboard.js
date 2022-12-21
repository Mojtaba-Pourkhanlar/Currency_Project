import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DasboardData } from "../../context/Dahsboard";
import { SpeedDialDrop } from "../../once";
import { SideBar } from "./Sidebar/SideBar";
import { getAllCoins, getAllMarkets } from "../../services/api";
import { Header } from "../layout/header";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [allMarekts, setAllMarkets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [javascript, setJavascript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [nextJs, setNextJs] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [reactNA, setReactNA] = useState(0);
  const [git, setGit] = useState(0);
  const [scss, setScss] = useState(0);
  const [redux, setRedux] = useState(0);
  const [mui, setMui] = useState(0);
  const [graph, setGraph] = useState(0);
  const [boot, setBoot] = useState(0);

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

    const timer = setInterval(() => {
      setJavascript((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 75);
      });

      setHtml((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 90);
      });

      setCss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });

      setReactJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });
      setReactNA((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });

      setNextJs((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 45);
      });

      setGit((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 60);
      });

      setScss((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });

      setRedux((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 65);
      });

      setMui((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });

      setGraph((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 70);
      });

      setBoot((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 85);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
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
        javascript,
        html,
        css,
        nextJs,
        reactJs,
        reactNA,
        git,
        scss,
        redux,
        mui,
        graph,
        boot,
        setJavascript,
        setHtml,
        setCss,
        setNextJs,
        setReactJs,
        setReactNA,
        setGit,
        setScss,
        setRedux,
        setMui,
        setGraph,
        setBoot,
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
