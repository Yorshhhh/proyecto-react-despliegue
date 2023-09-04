import React from "react";
import UserForm from "../componentes/UserForm";
import UsersList from "../componentes/UsersList";

function RegisterPage() {
  return (
    <div className="container mt-2 mb-2 mx-auto bg-teal-500 p-5">
      <h1>Holi desde Register Page</h1>

      <div className="bg-green-400 pb-1" >
        <UserForm />
      </div>

      <div className="bg-yellow-500 mx-auto">
        <UsersList />
      </div>
    </div>
  );
}

export default RegisterPage;
