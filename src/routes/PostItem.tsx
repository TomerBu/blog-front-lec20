import React from "react";
import { Post } from "../@types/types";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";

const PostItem = ({ id, title, description, content }: Post) => {
  return (
    <Card>
      <Link to={`/posts/${id}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{content}</p>
      </Link>
    </Card>
  );
};

export default PostItem;
