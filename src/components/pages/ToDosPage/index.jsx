import React from "react";
import AddToDoForm from "../../AddToDoForm";
import ToDosContainer from "../../ToDosContainer";

export default function ToDosPage() {
  return (
    <div>
      <AddToDoForm/>
      <ToDosContainer />
    </div>
  );
}
