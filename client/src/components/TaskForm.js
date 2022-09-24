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
import { useNavigate } from "react-router-dom";

export default function TaskForm() {
  // Navigate
  const navigate = useNavigate();

  // useState Task
  const [task, setTask] = useState({
    Title: "",
    Description: "",
  });

  


  // useState Loading
  const [loading, setLoading] = useState(false);
  
  // HandleChange
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // HandleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("http://localhost:3000/routes/tasks/", {
      method: "POST",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    setLoading(false);

    navigate("/");
    console.log(data);
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
            New Task
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                name="Title"
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
              <Button variant="contained" color="primary" type="submit" disabled={!task.Title || !task.Description} >
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
