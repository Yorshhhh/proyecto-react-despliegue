import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function UserForm() {
  const [rut, setRut] = useState("");
  const [nombre_cliente, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [reset, setReset] = useState("");
  const [rango, setRango] = useState("");

  const { createUsers } = useContext(TaskContext);

  const handdleSubmit = (e) => {
    e.preventDefault();
    createUsers({ rut, nombre_cliente, password, reset, rango });

    console.log("Rut:", rut);
    console.log("Nombre del cliente:", nombre_cliente);
    console.log("Contraseña:", password);
    console.log("Rango:", rango);
    console.log("Reset:", reset);
    setRut("");
    setNombre("");
    setPassword("");
    setReset("");
    setRango("");
  };
  return (
    <div className="max-w-md mx-auto">
      <p>Esto esta escrito desde userForm!</p>
      <h1 className="text-2xl text-black font-bold mb-3">Crea tu cuenta</h1>
      <form onSubmit={handdleSubmit} className="bg-slate-500 p-5 mb-4">
        <input
          placeholder="Ingresa tu rut"
          onChange={(e) => {
            setRut(e.target.value);
          }}
          value={rut}
          autoFocus
          className="bg-slate-300 px-3 w-full mb-2"
        />
        <input
          placeholder="Ingresa tu Nombre Completo"
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          value={nombre_cliente}
          className="bg-slate-300 px-3 w-full mb-2"
        />
        <input
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          className="bg-slate-300 px-3 w-full mb-2"
        />
        <input
          placeholder="Cantidad de Resets"
          onChange={(e) => {
            setReset(e.target.value);
          }}
          value={reset}
          className="bg-slate-300 px-3 w-full mb-2"
        />
        <input
          placeholder="Rango"
          onChange={(e) => {
            setRango(e.target.value);
          }}
          value={rango}
          className="bg-slate-300 px-3 w-full mb-2"
        />
        <button className="bg-indigo-500 px-3 py-1 hover:bg-indigo-400 text-white rounded-md">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default UserForm;
