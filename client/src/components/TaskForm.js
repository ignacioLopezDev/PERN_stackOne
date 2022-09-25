import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm() {
  // Navigate
  const navigate = useNavigate();

  // Params
  const params = useParams();

  // useState Task  --> los valores del formulario
  const [task, setTask] = useState({
    Title: "",
    Description: "",
  });

  // useState Loading
  const [loading, setLoading] = useState(false);

  // useState - editing
  const [editing, setEditing] = useState(false);

  // HandleChange
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // loadTask para traer los datos en caso de Edit
  const loadTask = async (id) => {
    const res = await fetch(`http://localhost:3000/routes/tasks/${id}`);
    const data = await res.json();
    setTask({ Title: data.Title, Description: data.Description });
    // si encuentra la tarea y carga sus datos que ejecute en true un proceso Editing
    setEditing(true);
  };

  // useEffect - New task or edit
  useEffect(() => {
    // son use params identifico el id cuando carga y valido si existe
    // si existe traigo sus datos (loadData), sinó es nuevo
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editing) {
      const res = await fetch(
        `http://localhost:3000/routes/tasks/${params.id}`,
        {
          method: "PUT",
          body: JSON.stringify(task),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      console.log("data:", data);
    } else {
      await fetch("http://localhost:3000/routes/tasks/", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
    }

    setLoading(false);
    navigate("/");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item sx={3} style={{ backgroundColor: "#1e272e", padding: "1rem" }}>
        <Card sx={{ mt: 5 }}>
          <Typography variant="h5" textAlign="center" color="#1e272e">
            {editing ? "Edit Task" : "New Task"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                name="Title"
                value={task.Title}
                onChange={handleChange}
                variant="filled"
                label="escribir aqui"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                InputLabelProps={{ style: { color: "#1e272e" } }}
                inputProps={{ style: { color: "green" } }}
              />
              <TextField
                name="Description"
                value={task.Description}
                onChange={handleChange}
                variant="filled"
                label="write your description"
                multiline
                rows={4}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                InputLabelProps={{ style: { color: "#1e272e" } }}
                inputProps={{ style: { color: "green" } }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!task.Title || !task.Description}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "SAVE"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
