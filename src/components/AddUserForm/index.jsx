import React from "react";
import { useForm } from "react-hook-form";
import { addUser } from "../../requests/users";
import s from "./index.module.css";
import { Context } from "../../contex";
import { useContext } from "react";

export default function AddUserForm() {
  const { createNewUser } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const submit = (data) => {
    console.log(data);
    addUser(data, createNewUser);
  };

  const firstnameRegister = register("firstName", {
    required: "*Field firstname is required",
  });

  const lastnameRegister = register("lastName", {
    required: "*Field lastname is required",
  });

  const ageRegister = register("age", {
    required: "*Field age is required",
  });

  return (
    <div>
      <form className={s.add_user_form} onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          {...firstnameRegister}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          {...lastnameRegister}
        />

        <input type="text" name="age" placeholder="Age" {...ageRegister} />

        <button>Add user</button>
      </form>

      <div>
        <div>{errors?.firstname && <p>{errors?.firstname?.message}</p>}</div>

        <div>{errors?.lastname && <p>{errors?.lastname?.message}</p>}</div>

        <div>{errors?.age && <p>{errors?.age?.message}</p>}</div>
      </div>
    </div>
  );
}
