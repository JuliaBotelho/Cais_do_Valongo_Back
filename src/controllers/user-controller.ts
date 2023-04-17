import userService from "@/services/user-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postUser(req:Request, res:Response){
    const { email, username ,password } = req.body;

    try{
        const user = await userService.createNewUser(email, username, password);
        return res.status(httpStatus.CREATED).json({
            id:user.id,
            email:user.email        
        });
    }catch(error){
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
};

export async function logUser(req:Request, res:Response) {
    const { email ,password } = req.body;

    try{
        const userInfo = await userService.logUser(email, password)

        return res.status(httpStatus.OK).send(userInfo);
    }catch(error){
        return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
};
