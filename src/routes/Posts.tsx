import { useContext, useEffect, useState } from "react";
import { PostsService } from "../services/posts-service";
import { PostsPage } from "../@types/types";
import PostItem from "./PostItem";
import Spinner from "../components/Spinner";
import { AuthContext } from "../contexts/AuthContext";
import { isErrorWithMessage, isHttpError401 } from "../utils/axios-helper";

const Posts = () => {
  const [postPage, setPostPage] = useState<PostsPage>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        setLoading(true);
        setError(undefined);
        const res = (await PostsService.getPostsAxios()) as PostsPage;
        setPostPage(res);
      } catch (e) {
        if (isHttpError401(e)) {
          return logout();
        }
        if (isErrorWithMessage(e)) setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    asyncFunction();
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {error && <div>error</div>}
      {!error && !loading && (
        <div className="flex flex-col gap-5">
          {postPage?.posts.map((p) => (
            <PostItem key={p.id} {...p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
