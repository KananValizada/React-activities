import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000" });

export const fetchPosts = () => api.get("/posts");
export const createPost = (post) => api.post("/posts", post);
export const getPost = (id) => api.get("/posts/" + id);
export const updatePost = (id, post) => api.patch("/posts/" + id, post);
