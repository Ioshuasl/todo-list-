// Task.js vai definir a estrutura da tabela de tarefas

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Task = sequelize.define('Task', {
  nome: {
    type: DataTypes.STRING,  //DataType vai especificar o tipo de cada variável
    allowNull: false    // vai definir se esse campo "nome" pode estar vazio
   },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false     // vai definir um valor padrão para a variável
  }
});

export default Task;