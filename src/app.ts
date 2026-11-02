import "dotenv/config.js";
import Express, { urlencoded } from "express";
import helmet from "helmet";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import router from "./router";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = Express();
server.use(helmet());
server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));
server.use(Express.static(path.join(__dirname, '../public')));

// server.use(Express.public())


server.use(router);



server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})