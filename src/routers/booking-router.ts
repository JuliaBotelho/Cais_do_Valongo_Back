import { Router } from "express";
import { getDates, postReservation, getReservation } from "@/controllers";
import { authenticateToken } from "@/middlewares";

const bookingRouter = Router();

bookingRouter.post("/reservation", authenticateToken,postReservation);
bookingRouter.get("/dates", authenticateToken , getDates);
bookingRouter.get("/reservation", authenticateToken ,getReservation);

export { bookingRouter };