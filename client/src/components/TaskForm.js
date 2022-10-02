import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskForm() {
  // useParams
  const params = useParams();

  // navigate
  const navigate = useNavigate();

  // useState - Loading
  const [loading, setLoading] = useState(false);

  // useState - Editing
  const [editing, setEditing] = useState(false);

  // LoadTask
  const loadTask = async (id) => {
    const res = await fetch(`http://localhost:3000/routes/tasks/${id}`);
    const data = await res.json();
    setTasks({ Title: data.Title, Description: data.Description });
    setEditing(true);
  };

  // useEffect - Si edit o New
  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  // useState - Tasks
  const [tasks, setTasks] = useState({
    Title: "",
    Description: "",
  });

  // HandleChange
  const HandleChange = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value });
  };

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editing) {
      await fetch(`http://localhost:3000/routes/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(tasks),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      await fetch("http://localhost:3000/routes/tasks/", {
        method: "POST",
        body: JSON.stringify(tasks),
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
          <Typography
            variant="h5"
            textAlign="center"
            color="#1e272e"
          ></Typography>
          <CardContent>
            <form>
              <TextField
                name="Title"
                value={tasks.Title}
                onChange={HandleChange}
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
                value={tasks.Description}
                onChange={HandleChange}
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
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                type="submit"
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
