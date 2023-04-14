import { Router } from "express";
import { getGeoInformations, getHistInformations } from "@/controllers";

const informationRouter = Router();

informationRouter.get("/geo", getGeoInformations);
informationRouter.get("/hist",getHistInformations);

export { informationRouter };