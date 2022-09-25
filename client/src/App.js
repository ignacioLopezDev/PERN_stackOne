// borramos todo y "rfc" rehacemos la estructura

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TasksList";

import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
<NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/new" element={<TaskForm />} />
          <Route path="/task/:id/edit" element={<TaskForm/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
