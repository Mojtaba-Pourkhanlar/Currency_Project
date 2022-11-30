import axios from "axios";

const currencyList =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false";

const currencyID = "https://api.coingecko.com/api/v3/coins";

const allMarkets =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export const getAllCoins = () => {
  return axios.get(currencyList);
};

export const getAllMarkets = () => {
  return axios.get(allMarkets);
};

export const getCoinID = (id) => {
  return axios.get(`${currencyID}/${id}`);
};

export const HistoricalChart = (id, days = 365) => {
  return axios.get(
    `${currencyID}/${id}/market_chart?vs_currency=usd&days=${days}`,
  );
};
