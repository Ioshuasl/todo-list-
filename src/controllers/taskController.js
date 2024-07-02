import Task from '../models/taskModel.js';

class TaskController {
  // Create
  async createTask(taskData) {
    const task = await Task.create(taskData);
    return { message: "Task added successfully!", task };
  }

  // Read
  async getAllTasks() {
    const tasks = await Task.findAll();
    return tasks;
  }

  // Update
  async updateTask(id, updatedData) {
    await Task.update(updatedData, { where: { id } });
    return { message: "Task updated successfully!" };
  }

  // Delete
  async deleteTask(id) {
    await Task.destroy({ where: { id } });
    return { message: "Task deleted successfully!" };
  }
}

export default new TaskController();
