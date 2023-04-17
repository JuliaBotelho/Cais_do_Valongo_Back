import { NextFunction, Request, Response } from "express";
import { registerSchema } from "@/schemas/register-schema";
import { signInSchema } from "@/schemas/sign-in-schema";

export function userValidation(req:Request, res:Response, next: NextFunction){
    const user = req.body;
    const { error } = registerSchema.validate(user, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        res.status(422).send(errors);
        return;
    }
    next();
};

export function signInValidation(req:Request, res:Response, next: NextFunction){
    const user = req.body;
    const { error } = signInSchema.validate(user, { abortEarly: false });
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        res.status(422).send(errors);
        return;
    }
    next();
}