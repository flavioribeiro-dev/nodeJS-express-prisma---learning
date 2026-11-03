import { RequestHandler } from "express";

export const interferir: RequestHandler = (req, res, next) => {
    const logged = true;
    logged ? next() : res.status(403).json({ error: "middleware não deixou pingar!" });
}