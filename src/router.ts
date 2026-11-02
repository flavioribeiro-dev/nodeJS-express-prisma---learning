import { Router } from "express";
import produtosRouter from "./routes/produtosRouter";
import voosRouter from "./routes/voosRouter";

const router = Router();

router.use('/produtos', produtosRouter)
router.use('/voos', voosRouter)

export default router;