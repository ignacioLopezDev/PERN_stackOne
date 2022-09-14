const { Tasks } = require("../models/index.models");

// consulta todos los tasks
const showAllTasks = async (req, res) => {
  try {
    const result = await Tasks.findAll();
    return res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

// agrega tasks
const createTask = async (req, res) => {
  const { Title, Description } = req.body;

  try {
    const result = await Tasks.create({ Title, Description });
    res.status(201).send(result);
  } catch (err) {
    res.status(505).send(err);
  }
};

// modifica tasks
const modifyTask = async (req, res) => {
  const { Description, id } = req.body;
  try {
    const [affectedRows, result] = await Tasks.update(
      { Description },
      { where: { id }, returning: true }
    );
    res.status(200).send(result[0]);
  } catch (err) {
    res.status(505).send(err);
  }
};

// borra un tasks
const deleteTasks = async (req, res) => {
  const { id } = req.body;
  const check = await Tasks.destroy({ where: { id } });
  if (!check) return res.status(404).send("The task does not exist");
  try {
    res.status(202).send("The task was eliminated");
  } catch (err) {
    res.status(505).send({ error: err });
  }
};

// mostrar un solo Task
const showOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Tasks.findByPk(id);
    res.status(200).send(result);
  } catch (err) {
    res.send(500).status(err);
  }
};

module.exports = {
  showAllTasks,
  createTask,
  modifyTask,
  deleteTasks,
  showOneTask,
};
