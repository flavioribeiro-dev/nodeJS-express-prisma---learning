import "dotenv/config";
import Express from "express";
import router from "./router.js";

const server = Express();

server.use(router);
server.use(Express.urlencoded({ extended: true }));

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})