const express = require("express");
const {
  showAllTasks,
  createTask,
  modifyTask,
  deleteTasks,
  showOneTask,
} = require("../controllers/tasksController");

const taskRoutes = express.Router();

// rutas de todas las tareas "/tasks"
taskRoutes.get("/tasks", showAllTasks);
taskRoutes.post("/tasks", createTask);
taskRoutes.put("/tasks", modifyTask);
taskRoutes.delete("/tasks/:id", deleteTasks);

// // rutas de una sola tarea "/tasks/:id"
taskRoutes.get("/tasks/:id", showOneTask);

module.exports = taskRoutes;