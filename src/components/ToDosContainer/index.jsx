import React from "react";
import { useContext } from "react";
import ToDos from "../ToDos";
import { Context } from "../../contex";
import s from './index.module.css'

export default function ToDosContainer() {
  const { todos } = useContext(Context);
  return (
    <div className={s.todo_container}>
      {todos.map((el) => (
        <ToDos key={el.id} {...el} />
      ))}
    </div>
  );
}
