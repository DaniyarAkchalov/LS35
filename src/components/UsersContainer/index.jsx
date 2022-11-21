import React from "react";
import { useContext } from "react";
import Users from "../Users";
import s from "./index.module.css";
import { Context } from "../../contex";

export default function UsersContainer() {

    const { users } = useContext(Context)
  return (
    <div className={s.users_container}>
      {users.map((el) => (
        <Users {...el} key={el.id} />
      ))}
    </div>
  );
}
