import { Router } from "express";
import { createUser, createUserPost, createUsers, find_partEmail, findAllUsers, findAllUsersDetails, findUserByiD, updateUser } from "./services/UserServices.js";

const router = Router();

// Rota padrão - página inicial
router.get('/', (req, res) => {
    res.send('ok 12345')
})

// Rota para CRIAÇÃO DE UM NOVO REGISTRO ÚNICO (simples)
router.post('/user', async (req, res) => {
    const result = await createUser({
        nome: "Ana Beatriz", 
        email: "biaa@yahoo.com.br",
    });
    res.status(201).json({ result });
});

// Rota para CRIAÇÃO DE VÁRIOS REGISTROS SIMULTÂNEOS
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

// Rota para ATUALIZAÇÃO DE UM OU MAIS CADASTROS
router.put('/user', async (req, res) => {
    const result = await updateUser();
    res.json({ result });
})

// Rota para CONSULTA DE TODOS OS USUÁRIOS CADASTRADOS (exibindo todos os campos)
router.get('/users', async (req, res) => {
    const result = await findAllUsers();
    res.json({ result });
})

// Rota para CONSULTA DE TODOS OS USUÁRIOS CADASTRADOS (exibindo apenas determinados campos)
router.get('/users-details', async (req, res) => {
    const result = await findAllUsersDetails();
    res.json({ result })
})

// Rota para CONSULTA DE UM DETERMINADO USUÁRIO (a partir do ID) ---- WHERE definindo a Condição da consulta
router.get('/userId', async (req, res) => {
    const result = await findUserByiD()
    res.json({ result })
})

// Rota para CONSULTA DE USUÁRIOS QUE TENHAM UM DETERMINADO "TERMO" EM SEU EMAIL
router.get('/userEmail', async (req, res) => {
    const result = await find_partEmail();
    res.json({ result });
})

// Rota para CRIAÇÃO DE USUÁRIO COM POST --- criação simultânea de registros relacionados
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