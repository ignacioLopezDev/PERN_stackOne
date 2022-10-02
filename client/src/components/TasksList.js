import { Button, Card, CardContent, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
// 
const navigate = useNavigate()

  // UseState - TaskList
  const [tasks, setTasks] = useState([]);

  // loadTasks
  const loadTasks = async () => {
    const res = await fetch("http://localhost:3000/routes/tasks");
    const data = await res.json();
    setTasks(data);
  };

  // useEffect
  useEffect(() => {
    loadTasks();
  }, []);

  // handleDelete
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/routes/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

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
          key={task.id}
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
                style={{ color: "black" }}
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/task/${task.id}/edit`)}
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(task.id)}
                variant="contained"
                color="warning"
                style={{ marginLeft: ".5rem" }}
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
