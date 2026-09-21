import { Router } from "express";
import { prisma } from "./libs/prisma.js";

const router = Router();

router.get('/', (req, res) => {
    res.send('ok 12345')
    // const user = prisma
})

export default router;