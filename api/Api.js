import axios from "axios";

const api = axios.create({
  baseURL: `http://172.16.188.112:8080/v2/`
});

export const login = async (username, password) => {
  return await api.post("user/login", {
    Username: username,
    Password: password
  });
};

export const getOffices = async () => {
  return await api.get("offices");
};

export const getFloors = async locationId => {
  return await api.get(`floors/${locationId}`);
};
