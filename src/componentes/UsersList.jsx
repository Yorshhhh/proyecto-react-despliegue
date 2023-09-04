import UsersCard from './UsersCard'
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function UsersList() {
  const { users } = useContext(TaskContext);

  if (users.length === 0){
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay usuarios registrados aún
      </h1>
    );
  }
  return (
    <div>
      <h1>Este mensaje viene de Users List</h1>
      <div className="grid grid-cols-4 gap-2 rounded-md">
        {users.map((user) => (
          <UsersCard key={user.id_cliente} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UsersList;
