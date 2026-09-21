import { Router } from "express";
import { prisma } from "./libs/prisma.js";

const router = Router();

router.get('/', (req, res) => {
    res.send('ok 12345')
})

router.post('/users', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            nome: "Rafaela",
            email: "rafaela@email.com",
            funcao: "ADMIN"
        }
    })
    res.status(201).json({ user });
})

export default router;