import axios from "axios";
import { Toastify } from "frontEnd/helpers";

const url = "https://apingweb.com/api";

export const LoginUse = async (user) => {
  try {
    const { data, status } = await axios.post(`${url}/login`, user);
    const users = data.result.name;
    const token = data.token;
    const result = data.result;
    localStorage.setItem("user", JSON.stringify(users));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("result", JSON.stringify(result));
    return status;
  } catch (error) {
    Toastify(`${error.response.data.message} 😒`, "error");
  }
};

export const RegisterUser = async (user) => {
  try {
    const { status } = await axios.post(`${url}/register`, user);
    return status;
  } catch (error) {
    Toastify(`${error.response.data.errors[0]} 😒`, "error");
  }
};
