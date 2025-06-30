import axios from "axios";

const API_URL = "https://backendpraktikum-production.up.railway.app/login";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data; 
  } catch (error) {
    throw new Error("Login gagal: " + error.response.data.message); 
  }
};


export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data; 
  } catch (error) {
    throw new Error("Registrasi gagal: " + error.response.data.message); 
  }
};
