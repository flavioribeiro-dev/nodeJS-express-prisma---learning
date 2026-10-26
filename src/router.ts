import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('página inicial 321');
})





export default router;