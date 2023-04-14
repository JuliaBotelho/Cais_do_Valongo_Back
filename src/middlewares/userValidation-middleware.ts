import { NextFunction, Request, Response } from "express";
import { registerSchema } from "@/schemas/register-schema";

export function userValidation(req:Request, res:Response, next: NextFunction){}

export function signInValidation(req:Request, res:Response, next: NextFunction){}