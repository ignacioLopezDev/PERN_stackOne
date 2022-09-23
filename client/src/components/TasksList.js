import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  // cargar tareas, para utilizarlo en el useEffect
  const loadTask = async () => {
    const res = await fetch("http://localhost:3000/routes/tasks");
    const data = await res.json();
    setTasks(data);
  };

  // useEffect
  useEffect(() => {
    loadTask();
  }, []);

// HandleDelete para eliminar tarea
const delete = async () => {
  const res = await fetch("http://localhost:3000/routes/tasks/"),{
    method: "DELETE"
  }
}

const handleDelete = (e => {})

  return (
    <>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Card
          style={{
            color: "white",
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography style={{ color: "whitesmoke" }}>
                {task.Title}
              </Typography>
              <Typography style={{ color: "grey" }}>
                {task.Description}
              </Typography>
            </div>
            <div>
              <Button
                style={{color:"black"}}
                variant="contained"
                color="inherit"
                onClick={() => console.log("eliminando")}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                style={{marginLeft:".5rem"}}
                onClick={() => console.log("delete")}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
