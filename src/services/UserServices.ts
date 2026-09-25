import type { Prisma } from "../../generated/prisma/browser.js"
import { prisma } from "../libs/prisma.js"

export const createUser = async (data : Prisma.UserCreateInput) => {
    const user = await prisma.user.create({
        data: data
    })
    return user;
}

export const updateUser = async () => {
    const updateUsers = await prisma.user.updateMany({
        data: {
            status: true
        }
    })
    return updateUsers;
}

export const createUsers = async (data: Prisma.UserCreateInput[]) => {
    return await prisma.user.createMany({
        data: data,
        skipDuplicates: true
    }
)}

export const createUserPost = async (data: Prisma.UserCreateInput) => {
    return await prisma.user.create({ data })
}

export const findAllUsers = async () => {
    let page = 0;
    let perPage = 2;
    
    return await prisma.user.findMany({
        skip: page * perPage,
        take: perPage,
        select: {
            id: true,
            nome: true,
            funcao: true,
            _count: {
                select: {
                    posts: true
                }
            }
        },
    });
}

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