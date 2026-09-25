import { Router } from "express";
import { createUser, createUserPost, createUsers, find_partEmail, findAllUsers, findUserByiD, updateUser } from "./services/UserServices.js";

const router = Router();

// Rota padrão - página inicial
router.get('/', (req, res) => {
    res.send('ok 12345')
})

router.post('/user', async (req, res) => {
    const result = await createUser({
        nome: "Mariana Oliveira", 
        email: "mariana.oliveira@hotmail.com",
    });
    res.status(201).json({ result });
});
router.put('/user', async (req, res) => {
    const result = await updateUser();
    res.json({ result });
})


router.post('/users', async (req, res) => {
    try {

        const result = await createUsers([
            { nome: "Igor Vasconcelos", email: "igor.vasconcelos@aol.com", funcao: "USER" },
            { nome: "Manuela Prado", email: "manuela.prado@zoho.com", funcao: "USER" },
            { nome: "Caio Borges", email: "caio.borges@gmx.com", funcao: "USER" },
            { nome: "Helena Ramos", email: "helena.ramos@mail.com", funcao: "ADMIN" },
        ])
        res.json({ count: result });

    } catch (error) {
        console.log(`Ocorreu um erro: ${error}`);
    }
})
router.get('/users', async (req, res) => {
    const result = await findAllUsers();
    res.json({ result });
})
router.get('/userId', async (req, res) => {
    const result = await findUserByiD()
    res.json({ result })
})
router.get('/userEmail', async (req, res) => {
    const result = await find_partEmail();
    res.json({ result });
})
router.post('/user-post', async (req, res) => {
    const result = await createUserPost({
        nome: "Charlote Ribeirinha",
        email: "charlotte@gmail.com",
        posts: {
            create: {
                titulo: "Meu Livro preferido",
                subtitulo: "minha vida, minha ração",
                conteudo: "aqui falo tudo, de todo mundo"
            }
        }
    })
    return res.json({ result })
})

export default router;