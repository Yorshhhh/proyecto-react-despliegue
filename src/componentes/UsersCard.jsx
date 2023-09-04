import React from "react";

function UsersCard({ user }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <a>ID: {user.id_cliente}</a>

      <h1 className="text-xl fond-bold capitalize">RUT: {user.rut_cliente}</h1>

      <p className="text-gray-500 text-sm text-center">
        Nombre completo: {user.nombre_cliente}
      </p>

      <p className="text-gray-500 text-sm text-center">
        Cantidad de Resets: {user.reset}
      </p>

      <p className="text-gray-500 text-sm text-center">Rango: {user.rango}</p>

      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Eliminar usuario
      </button>
    </div>
  );
}

export default UsersCard;
