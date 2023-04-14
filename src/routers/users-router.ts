import { Router } from "express";
import { postUser,logUser } from "@/controllers";
import { userValidation, signInValidation } from "@/middlewares";

const usersRouter = Router();

usersRouter.post("/", userValidation, postUser);
usersRouter.put("/signin", signInValidation, logUser);

export { usersRouter };