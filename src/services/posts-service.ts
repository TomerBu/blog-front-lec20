import { baseUrl } from "./auth-service";

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

export const PostsService = {getPosts}