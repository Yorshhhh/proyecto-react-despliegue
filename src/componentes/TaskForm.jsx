import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handdleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });

    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <p>Esto esta escrito desde TaskForm</p>
      <h1 className="text-2xl text-black font-bold mb-3">Agrega un Departamento</h1>
      <form onSubmit={handdleSubmit} className="bg-slate-500 p-5 mb-4">
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 px-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 px-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 hover:bg-indigo-400 text-white rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
