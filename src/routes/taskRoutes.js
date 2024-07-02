import express from "express";
import taskController from "../controllers/taskController.js";

const router = express.Router();

// Rota para listar todas as tarefas
router.get("/tasks", (req, res) => {
  const tasks = taskController.getAllTasks(req, res);
  res.json(tasks);
});

// Rota para adicionar uma nova tarefa
router.post("/tasks", (req, res) => {
  const newTask = taskController.createTask(req, res);
  res.status(201).json(newTask);
});

// Rota para atualizar uma tarefa
router.put("/tasks/:id", (req, res) => {
  const updatedTask = taskController.updateTask(req, res);
  res.json(updatedTask);
});

// Rota para deletar uma tarefa
router.delete("/tasks/:id", (req, res) => {
  const message = taskController.deleteTask(req, res);
  res.json(message);
});

export default router;