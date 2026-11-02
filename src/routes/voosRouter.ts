import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json({ voo: "partiuu" })
})

router.get('/:from/:to', (req, res) => {
    const { from, to } = req.params;
    res.json({ voo: {
        from: from.toUpperCase(),
        to: to.toUpperCase()
    } })
})

export default router;