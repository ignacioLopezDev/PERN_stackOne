import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {useState, useEffect} from "react"


export default function TaskForm() {

  const [ task , setTask ] = useState({
    title:"",
    description:""
  })
  
  const handleChange = e =>{
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(task);
  }

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
                name="title"
                onChange={handleChange}
                variant="filled"
                label="escribir aqui"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                InputLabelProps={{ style: { color: "#1e272e" }}}
                inputProps={{ style: { color: "green" } }}
              />
              <TextField
                name="description"
                onChange={handleChange}
                variant="filled"
                label="wite your description"
                multiline
                rows={4}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                InputLabelProps={{ style: { color: "#1e272e" }}}
                inputProps={{ style: { color: "green" } }}
              />
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
