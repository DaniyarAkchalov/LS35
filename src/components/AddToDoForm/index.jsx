import React from "react";
import { useContext } from "react";
import { Context } from "../../contex";
import { useForm } from "react-hook-form";
import { addToDos } from "../../requests/todos";
import s from "./index.module.css";

export default function AddToDoForm() {
  const { createNewToDo } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const submit = (data) => {
    console.log(data);
    addToDos(data, createNewToDo);
  };

  const todoRegister = register("Todo", {
    required: "Field todo is required",
  });

  const statusRegister = register("Status", {
    required: "Field status is required",
  });

  return (
    <div>
      <form className={s.add_todo_form} onSubmit={handleSubmit(submit)}>
        <input type="text" name="todo" placeholder="ToDo" {...todoRegister} />

        <input
          type="text"
          name="completed"
          placeholder="Completed"
          {...statusRegister}
        />

        <button>Add todo</button>
      </form>

      <div>
        <div> {errors?.todo && <p>{errors?.todo?.message}</p>} </div>
        <div> {errors?.status && <p>{errors?.status?.message}</p>} </div>
      </div>
    </div>
  );
}
