import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:7000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchMessages = () => API.get("/message");
export const createMessage = (message) => API.post("/message", message);
