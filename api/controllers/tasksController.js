const { Tasks } = require("../models/index.models");

// consulta todos los tasks
const showAllTasks = async (req, res, next) => {
  try {
    const result = await Tasks.findAll();
    return res.status(200).send(result);
  } catch (error) {
    next(error)
  }
};

// agrega tasks
const createTask = async (req, res, next) => {
  const { Title, Description } = req.body;

  try {
    const result = await Tasks.create({ Title, Description });
    res.status(201).send(result);
  } catch (error) {
    next(error)
  }
};

// modifica tasks
const modifyTask = async (req, res, next) => {
  const { Description, id } = req.body;
  const [affectedRows, result] = await Tasks.update(
    { Description },
    { where: { id }, returning: true }
  );

  
  if (!result[0]) return res.status(404).send("The task does not exist");

  try {
    res.status(200).send(result[0]);
  } catch (error) {
    next(error)
  }
};

// borra un tasks
const deleteTasks = async (req, res, next) => {
  const { id } = req.params;
  const check = await Tasks.destroy({ where: { id } });

  if (!check) return res.status(404).send("The task does not exist");

  try {
    res.status(204).send("The task was eliminated");
  } catch (error) {
    next(error)
  }
};

// mostrar un solo Task
const showOneTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Tasks.findByPk(id);
    res.status(200).send(result);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  showAllTasks,
  createTask,
  modifyTask,
  deleteTasks,
  showOneTask,
};


