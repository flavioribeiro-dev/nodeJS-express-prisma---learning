import type { Prisma } from "../../generated/prisma/browser.js"
import { prisma } from "../libs/prisma.js"

// Método para CRIAÇÃO DE UM NOVO REGISTRO ÚNICO (simples)
export const createUser = async (data : Prisma.UserCreateInput) => {
    const user = await prisma.user.create({
        data: data
    })
    return user;
}

// Método para ATUALIZAÇÃO DE UM OU MAIS CADASTROS
export const updateUser = async () => {
    const updateUsers = await prisma.user.updateMany({
        data: {
            status: true
        }
    })
    return updateUsers;
}

// Método para CRIAÇÃO DE VÁRIOS REGISTROS SIMULTÂNEOS
export const createUsers = async (data: Prisma.UserCreateInput[]) => {
    return await prisma.user.createMany({
        data: data,
        skipDuplicates: true
    }
)}

// Método para CRIAÇÃO DE USUÁRIO COM POST --- criação simultânea de registros relacionados
export const createUserPost = async (data: Prisma.UserCreateInput) => {
    return await prisma.user.create({ data })
}

// Método para CONSULTA DE TODOS OS USUÁRIOS CADASTRADOS
export const findAllUsers = async () => {
    return await prisma.user.findMany({
        select: {
            nome: true,
            email: true,
            funcao: true,
            status: true
        }
    });

    // let page = 0;
    // let perPage = 2;
    
    // return await prisma.user.findMany({
    //     // skip: page * perPage,
    //     // take: perPage,
    //     select: {
    //         id: true,
    //         nome: true,
    //         funcao: true,
    //         _count: {
    //             select: {
    //                 posts: true
    //             }
    //         }
    //     },
    // });

}

// Método para CONSULTA DE TODOS OS USUÁRIOS CADASTRADOS (nome, email, função)
export const findAllUsersDetails = async () => {
    const users = prisma.user.findMany({
        select: {
            nome: true,
            email: true,
            funcao: true
        }
    })
    return { users }
}

// Método para CONSULTA DE UM DETERMINADO USUÁRIO (a partir do ID) ---- WHERE definindo a Condição da consulta
export const findUserByiD = async () => {
    const user = await prisma.user.findUnique({
        where: { 
            id: 100
        },
        select: {
            nome: true,
            status: true
        }
    })
    return user;
}

// Método para CONSULTA DE USUÁRIOS QUE TENHAM UM DETERMINADO "TERMO" EM SEU EMAIL
export const find_partEmail = async () => {
    const users = await prisma.user.findMany({
        where: {
            OR: [
                { email: { endsWith: "email.com" } },
                { email: { endsWith: "gmail.com" } }
            ]
        }
    })
    return users;
}