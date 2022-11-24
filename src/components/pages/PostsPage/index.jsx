import React from "react";
import PostsContainer from "../../PostsContainer";
import AddPostForm from "../../AddPostForm";

export default function PostsPage() {
  return (
    <div>
      <AddPostForm/>
      <h2>Posts</h2>
      <PostsContainer />
    </div>
  );
}
