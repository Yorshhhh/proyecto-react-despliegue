import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
import { users as dataUser } from "../data/users";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  //Ahora el contexto tiene todas las funcionalidades de los componentes
  //Estado que crea las tareas
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

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
  //Funcion que crea los usuarios
  function createUsers(user) {
    setUsers([
      ...users,
      {
        id_cliente: users.length,
        rut_cliente: user.rut_cliente,
        nombre_cliente: user.nombre_cliente,
        password: user.password,
        reset: user.reset,
        rango: user.rango,
      },
    ]);
  }

  useEffect(() => {
    setTasks(data);
    setUsers(dataUser);
  }, [tasks, dataUser]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        users,
        createTask,
        deleteTask,
        createUsers,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
