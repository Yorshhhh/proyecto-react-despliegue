import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";

function App() {
  return (
    <main className="bg-zing-900 h-screen">
      <div className="container mx-auto bg-teal-500 p-5">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
