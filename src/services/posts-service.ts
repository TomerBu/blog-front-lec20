import { request } from "../utils/axios-helper";
import { baseUrl } from "./auth-service";
import axios from "axios";

const getData = async () => {
  const token = localStorage.getItem("token") ?? "";

  if (!token) {
    throw new Error("Must be logged in");
  }

  const response = await axios.get(`${baseUrl}/posts`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  return response.data;
};

const getPostsAxios = async () => {
  const res = await request({ url: "/posts" });
  return res.data;
};
const getPosts = async () => {
  const token = localStorage.getItem("token") ?? "";

  if (!token) {
    throw new Error("Must be logged in");
  }

  const res = await fetch(`${baseUrl}/posts`, {
    method: "GET",
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  const json = await res.json();

  if (!res.ok) {
    throw json;
  }
  return json;
};

export const PostsService = { getPosts , getPostsAxios};
