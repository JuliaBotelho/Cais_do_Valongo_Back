import { Router } from "express";
import { getDates, postReservation, getReservation } from "@/controllers";

const bookingRouter = Router();

bookingRouter.post("/reservation", postReservation);
bookingRouter.get("/dates", getDates);
bookingRouter.get("/reservation", getReservation);

export { bookingRouter };