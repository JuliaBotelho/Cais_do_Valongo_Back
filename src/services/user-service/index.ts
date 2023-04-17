import userRepository from "@/repositories/user-repository";
import { error } from "console";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

async function checkEmailUnique(email:string) {
    const userEmail = await userRepository.findUserByEmail(email);
    if(userEmail){
        throw error("Email already in use")
    }
}

async function createNewUser(email:string, username:string , password:string) {
    await checkEmailUnique(email);

    const hashedPassword = await bcrypt.hash(password, 12);
    return userRepository.createUser(email, username, hashedPassword);
}

async function logUser(email:string, password:string) {
    const user = await userRepository.findUserByEmail(email);
    if(user === undefined){
        throw error("Please register")
    }
    if(bcrypt.compare(password, user.password)){
        const token = uuid();
        const user = await userRepository.refreshToken(email, token);
        const userInfo = {
            userId: user.id,
            name: user.userName,
            email: user.email,
            token: user.token
        }
        return userInfo;
    }else{
        throw error("Something went wrong")
    }
}

const userService = {
    createNewUser,
    logUser
};

export default userService;