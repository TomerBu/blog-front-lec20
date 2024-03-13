import { useEffect, useState } from "react";
import { PostsService } from "../services/posts-service";
import { PostsPage } from "../@types/types";
import PostItem from "./PostItem";
import Spinner from "../components/Spinner";

const Posts = () => {
  const [postPage, setPostPage] = useState<PostsPage>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        setLoading(true);
        setError(undefined);
        const res = (await PostsService.getPosts()) as PostsPage;
        setPostPage(res);
      } catch (e) {
        if (
          e != null &&
          typeof e == "object" &&
          "message" in e &&
          typeof e["message"] == "string"
        )
          setError(e.message as string);
      } finally {
        setLoading(false);
      }
    };

    asyncFunction();
  }, []);

  return (
    <div>
      {loading && <Spinner/>}
      {error && <div>error</div>}
      {!error && !loading && (
        <div className="flex flex-col gap-5">
          {postPage?.posts.map((p) => (
            <PostItem key={p.id} {...p}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
