import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function TaskList() {

  // UseNavigate
  const navigate = useNavigate()

  // UseStaste -  Task
  const [tasks, setTasks] = useState([]);

  // LoadData, para utilizarlo en el useEffect
  const loadTask = async () => {
    const res = await fetch("http://localhost:3000/routes/tasks");
    const data = await res.json();
    setTasks(data);
  };

  // useEffect loadData
  useEffect(() => {
    loadTask();
  }, []);

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      // Tienen que eliminarlo desde el backend con un axios
      await fetch(`http://localhost:3000/routes/tasks/${id}`, {
        method: "DELETE",
      });

      // Y eliminarlo del mapeo del task con un filter
      // Filter a[1,2,3,4,5] -> a.filter( x => x !==3) -> [1, 2, 4, 5]
      setTasks(tasks.filter((task) => task.id !== id));

    } catch (error) {
      console.log(error)
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
                variant="contained"
                color="warning"
                style={{ marginLeft: ".5rem" }}
                onClick={() => handleDelete(task.id)}
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
