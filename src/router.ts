import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('ok 12345')
})

export default router;