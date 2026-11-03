import { RequestHandler, Router } from "express";
import { interferir } from "./middlewares/interferir";
import produtosRouter from "./routes/produtosRouter";
import voosRouter from "./routes/voosRouter";

const router = Router();

router.get('/:nome', (req, res) => {
    console.log(`Params: `, req.params);
    console.log(`Queries: `, req.query);
    console.log(`Body: `, req.body);
    // res.json({ pagina: "inicial" })
})

router.use('/produtos', produtosRouter)
router.use('/voos', voosRouter)

router.get('/ping', interferir, (req, res) => {
    console.log('pingou')
    res.json({ pong: true });
})


export default router;