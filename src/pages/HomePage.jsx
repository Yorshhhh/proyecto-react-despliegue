import React from "react";
import TaskList from "../componentes/TaskList";

function HomePage() {
  return (
    <div className="container mt-2 mb-2 mx-auto bg-teal-500 p-5">
      <h1>Reserva uno de nuestros departamentos!</h1>
      <a>... Esto esta escrito en home page</a>
      <TaskList />
    </div>
  );
}
export default HomePage;
