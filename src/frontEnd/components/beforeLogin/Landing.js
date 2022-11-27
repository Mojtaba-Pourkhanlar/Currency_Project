import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { CoinsList } from "../../context/Coins";
import { getAllCoins, getCoinID } from "../../services/api";
import { Layout } from "../layout";
import Banner from "./baner/Banner";
import { Categories } from "./categories";
import Coins from "./tabel";

const Landing = () => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [coinId, setCoinId] = useState([]);
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
        coinId,
        setCoinId,
      }}>
      <Layout>
        <div style={{ minHeight: "100vh" }}>
          <Banner />
          <Container maxWidth="lg">
            <Categories />
            <Coins />
          </Container>
        </div>
      </Layout>
    </CoinsList.Provider>
  );
};

export default Landing;
