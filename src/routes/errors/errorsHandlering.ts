import { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundHandler: RequestHandler = (req, res) => {
    res.status(404).json({ erro: "rota não encontrada" });
}

export const errorRendler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ erro: "ocorreu um erro em sua requisição" });
}