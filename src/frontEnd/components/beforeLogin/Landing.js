import { Container, Typography } from "@mui/material";
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
import { ModalTrue } from "../../helpers";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [onec] = useState(localStorage.getItem("vpn"));

  const { t } = useTranslation();

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (onec === null) {
      localStorage.setItem("vpn", true);
    }
  }, [onec]);

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
          {onec === null && (
            <ModalTrue>
              <Typography variant="h5" mb="10px">
                {t("vpnMessage")}
              </Typography>
              <Typography variant="h5" mb="30px">
                {t("vpnMessage02")}
              </Typography>
            </ModalTrue>
          )}

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
