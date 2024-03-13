import { useEffect, useState } from "react";
import { PostsService } from "../services/posts-service";
import { PostsPage } from "../@types/types";

const Posts = () => {
  const [posts, setPosts] = useState<PostsPage>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        const res = (await PostsService.getPosts()) as PostsPage;
        setPosts(res);
      } catch (e) {
        if (
          e != null &&
          typeof e == "object" &&
          "message" in e &&
          typeof e["message"] == "string"
        )
          setError(e.message as string);
      }
    };

    asyncFunction();
  }, []);

  return <div>Posts</div>;
};

export default Posts;
