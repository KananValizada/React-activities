import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

export const getPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
