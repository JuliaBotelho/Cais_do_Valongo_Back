import { prisma } from "@/config";

async function createUser(email:string, name:string ,encryptedpassword:string) {
    return prisma.users.create({
        data:{
            email: email,
            userName: name,
            password: encryptedpassword
        }
    })
}

async function findUserByEmail(email:string) {
    return prisma.users.findUnique({
        where:{
            email : email,
        }
    })
}

async function fetchByToken(token:string) {
    return prisma.users.findFirst({
        where:{
            token: token,
        }
    })
}

async function refreshToken(email:string, token:string) {
    const updatedUser = await prisma.users.update({
        where:{
            email:email,
        },
        data:{
            token:token,
        }
    })
    return updatedUser;
}

const userRepository = {
    createUser,
    findUserByEmail,
    refreshToken,
    fetchByToken
}

export default userRepository;