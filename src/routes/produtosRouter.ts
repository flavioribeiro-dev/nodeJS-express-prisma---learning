import { RequestHandler, Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.json({ produtos: [] })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({ 
        produto: {
            id: id,
            nome: "Teclado XYZ" ,
            preco: 999
        }
    });
})

export default router;