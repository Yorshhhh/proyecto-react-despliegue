import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  //Ahora el contexto tiene todas las funcionalidades de los componentes
  //Estado que crea las tareas
  const [tasks, setTasks] = useState([]);

  //Funcion que crea las tareas
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }
  //Funcion que elimina las tareas
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      <h1>Componente</h1>
      {props.children}
    </TaskContext.Provider>
  );
}
