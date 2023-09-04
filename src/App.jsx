import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./componentes/TaskForm";
import TaskList from "./componentes/TaskList";
//paginas
import AboutPage from "./pages/AboutPage";
//componentes
import NavBar from "./componentes/NavBar";
import HomePage from "./pages/HomePage";
import AgregarDeptos from "./pages/AgregarDeptos";
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/departamentos" element={<AgregarDeptos />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
