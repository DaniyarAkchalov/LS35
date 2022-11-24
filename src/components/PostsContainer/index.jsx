import React from "react";
import { useContext } from "react";
import Post from "../Post";
import s from "./index.module.css";
import { Context } from "../../contex";

export default function PostsContainer() {
  const { posts } = useContext(Context);
  return (
    <div className={s.posts_container}>
      {posts.map((el) => (
        <Post {...el} key={el.id} />
      ))}
    </div>
  );
}
