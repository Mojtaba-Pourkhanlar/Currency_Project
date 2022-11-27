import { createContext } from "react";

export const CoinsList = createContext({
  loading: false,
  setLoading: () => {},
  coins: [],
  setCoins: () => {},
  search: "",
  setSearch: () => {},
  page: 1,
  setPage: () => {},
  coinId: [],
  setCoinId: () => {},

});
