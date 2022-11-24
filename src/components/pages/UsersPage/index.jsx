import React from "react";
import UsersContainer from "../../UsersContainer";
import AddUserForm from "../../AddUserForm";

export default function UsersPage() {
  return (
    <div>
      <AddUserForm />
      <h2>Users:</h2>
      <UsersContainer />
    </div>
  );
}
