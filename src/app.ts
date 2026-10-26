import "dotenv/config.js";
import Express from "express";
import router from "./router";

const server = Express();

server.use(router);

server.listen(3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})