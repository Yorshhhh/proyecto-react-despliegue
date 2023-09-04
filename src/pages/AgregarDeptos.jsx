import React from "react";
import TaskForm from "../componentes/TaskForm";
import TaskList from "../componentes/TaskList";

function AgregarDeptos() {
  return (
    <div className="container mt-2 mb-2 mx-auto bg-teal-500 p-5">
      <h1>Bienvenido</h1>
      <p>y esto está escrito desde Agregar departamentos</p>
      
      <div className="bg-green-400">
        <TaskForm />
      </div>
      
      <div className="bg-yellow-500">
        <TaskList />
      </div>
    </div>
  );
}

export default AgregarDeptos;
