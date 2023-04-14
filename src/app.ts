import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDb } from "@/config";

loadEnv();

import{
    bookingRouter,
    informationRouter,
    usersRouter
} from "@/routers"

const app = express();

app
    .use(cors())
    .use(express.json())
    .use("/info", informationRouter)
    .use("/booking", bookingRouter)
    .use("/user", usersRouter)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDb();
}

export default app;