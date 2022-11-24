import React from "react";
import { useForm } from "react-hook-form";
import { addPost } from "../../requests/post";
import s from "./index.module.css";
import { Context } from "../../contex";
import { useContext } from "react";

export default function AddPostForm() {
  const { createNewUser } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const submit = (data) => {
    console.log(data);
    addPost(data, createNewUser);
  };

  const titleRegister = register("title", {
    required: "*Field title is required",
  });

  const bodyRegister = register("body", {
    required: "*Field body is required",
  });

  return (
    <div>
      <form className={s.add_post_form} onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          {...titleRegister}
        />

        <input
          type="text"
          name="body"
          placeholder="Body"
          {...bodyRegister}
        />

        <button>Add post</button>
      </form>

      <div>
        <div>{errors?.title && <p>{errors?.title?.message}</p>}</div>

        <div>{errors?.body && <p>{errors?.body?.message}</p>}</div>
      </div>
    </div>
  );
}
