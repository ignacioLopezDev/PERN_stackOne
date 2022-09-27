
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function TaskList() {

  return (
    <>
      <h1>Task List</h1>
      {/* {tasks.map((task) => ( */}
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

              </Typography>
              <Typography style={{ color: "grey" }}>

              </Typography>
            </div>
            <div>
              <Button
                style={{ color: "black" }}
                variant="contained"
                color="inherit"
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                style={{ marginLeft: ".5rem" }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
    </>
  );
}
