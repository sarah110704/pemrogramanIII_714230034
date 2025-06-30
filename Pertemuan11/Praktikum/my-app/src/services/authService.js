import axios from "axios";

const API_URL = "https://backendpraktikum-production.up.railway.app/login";

export const login = async (username, password) => {
  const response = await axios.post(API_URL, { username, password });
  return response.data;
};