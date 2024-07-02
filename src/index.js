import express from "express";
import sequelize from "./config/database.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
const PORT = 3000;

// Inicializando Sequelize
(async () => {
  try {
    await sequelize.authenticate(); // Verifica a conexão com o banco de dados
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    await sequelize.sync(); // Sincroniza os modelos com o banco de dados
    console.log("Modelos sincronizados com sucesso!");
  } catch (error) {
    console.error("Falha ao conectar com o banco de dados:", error);
  }
})();

app.use(express.json()); // Para lidar com JSON
app.use("/api", taskRoutes); // Integrando as rotas com o taskROutes

app.listen(PORT, () => {
  console.log(`Servidor tá na área em <http://localhost>:${PORT} 🚀`);
});