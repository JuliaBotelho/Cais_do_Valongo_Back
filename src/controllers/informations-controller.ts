import informationService from "@/services/information-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getGeoInformations(req: Request, res:Response){
    try{
        const geoInformation = await informationService.findGeologicInfos();

        return res.status(httpStatus.OK).send(geoInformation);
    }catch (error){
        return res.sendStatus(httpStatus.NO_CONTENT);
    }
}

export async function getHistInformations(req: Request, res:Response){
    try{
        const histInformation = await informationService.findHistoricInfos();

        return res.status(httpStatus.OK).send(histInformation);
    }catch (error){
        return res.sendStatus(httpStatus.NO_CONTENT);
    }
}