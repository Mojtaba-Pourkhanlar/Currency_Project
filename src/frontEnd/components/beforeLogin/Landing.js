import { Container } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { CoinsList } from "../../context/Coins";
import { getAllCoins } from "../../services/api";
import { Layout } from "../layout";
import Banner from "./baner/Banner";
import { Categories } from "./categories";
import Coins from "./tabel";
import FAQ from "./faq";
import { BackTop, ScrollTop } from "../../once";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../../helpers/constants/particles";

const Landing = () => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

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

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <CoinsList.Provider
      value={{
        loading,
        setLoading,
        coins,
        setCoins,
        search,
        setSearch,
        page,
        setPage,
      }}>
      <Layout>
        <div style={{ minHeight: "100vh" }}>
          <Banner />
          <Container maxWidth="lg">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={links}
            />
            <Categories />
            <Coins />
            <FAQ />
          </Container>
        </div>
        <BackTop />
        <ScrollTop />
      </Layout>
    </CoinsList.Provider>
  );
};

export default Landing;
