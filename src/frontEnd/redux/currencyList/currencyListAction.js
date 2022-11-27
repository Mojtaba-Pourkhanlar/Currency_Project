import axios from "axios";

const fetchRequest = () => {
  return {
    type: "FETCH_REQUEST",
  };
};
const fetchSuccess = (coins) => {
  return {
    type: "FETCH_SUCCESS",
    payload: coins,
  };
};
const fetchFailure = (error) => {
  return {
    type: "FETCH_FAILURE",
    payload: error,
  };
};

const fetchData = async() => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("")
      .then((response) => {
        const coins = response.data;
        dispatch(fetchSuccess(coins));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchFailure(errorMsg));
      });
  };
};

export { fetchRequest, fetchSuccess, fetchFailure, fetchData };
