import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function TaskForm() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item sx={1} style={{ backgroundColor: "#1e272e", padding: "1rem" }}>
        <Card sx={{ mt: 5 }}>
          <Typography variant="h5" textAlign="center" color="#1e272e">
            New Task
          </Typography>
          <CardContent>
            <form>
              <TextField
                variant="filled"
                label="escribir aqui"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                inputLabelProps={{ style: { color: "#1e272e" }}}
                inputProps={{ style: { color: "green" } }}
              />
              <TextField
                variant="filled"
                label="wite your description"
                multiline
                rows={4}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                inputLabelProps={{ style: { color: "#1e272e" }}}
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
