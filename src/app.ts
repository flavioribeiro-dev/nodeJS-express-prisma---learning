import "dotenv/config.js";
import Express, { urlencoded } from "express";
import helmet from "helmet";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import router from "./router";
import { notFoundHandler, errorRendler } from "./routes/errors/errorsHandlering";
import { interferir } from "./middlewares/interferir";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = Express();
server.use(helmet());
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));
server.use(Express.static(path.join(__dirname, '../public')));

server.use(interferir);     // executa o Middleware para todas as Rotas da aplicação 
server.use(router);
server.use(notFoundHandler);
server.use(errorRendler);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})