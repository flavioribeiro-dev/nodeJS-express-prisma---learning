import "dotenv/config.js";
import Express from "express";
import router from "./router";

const server = Express();

server.use(router);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})