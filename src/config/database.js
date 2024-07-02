import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('todo-list', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

export default sequelize;

// sequelize vai fazer a conexão com o banco de dados