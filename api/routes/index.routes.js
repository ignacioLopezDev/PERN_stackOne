const express = require("express");
const {
  showAllTasks,
  createTask,
  modifyTask,
  deleteTasks,
  showOneTask,
} = require("../controllers/tasksController");

const routes = express.Router();

// rutas de todas las tareas "/tasks"
routes.get("/tasks", showAllTasks);
routes.post("/tasks", createTask);
routes.put("/tasks", modifyTask);
routes.delete("/tasks", deleteTasks);

// // rutas de una sola tarea "/tasks/:id"
routes.get("/tasks/:id", showOneTask);

module.exports = routes;
