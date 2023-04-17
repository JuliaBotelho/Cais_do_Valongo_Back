import userRepository from "@/repositories/user-repository";
import { NextFunction, Request, Response } from "express";
import { userInfo } from "os";

export async function authenticateToken(req:Request, res:Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");  
    
    if (!token) {
        res.status(401).send("Sign-in properly, please");
        return;
    }
    try{
        const userlog = await userRepository.fetchByToken(token);
        if(!userlog){
            res.status(401).send("Non-existent Token");
            return;
        }
        res.locals.userId = userlog.id;
    }catch (error){
        res.sendStatus(500);
    }

    next();
}