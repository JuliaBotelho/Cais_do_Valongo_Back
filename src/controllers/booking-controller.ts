import bookingService from "@/services/booking-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getDates(req:Request, res:Response) {
    try{
        const visitationDates = await bookingService.fetchVisitsDays();

        return res.status(httpStatus.OK).send(visitationDates);
    }catch (error) {
        return res.sendStatus(httpStatus.NO_CONTENT);
    }
}

export async function postReservation(req:Request, res:Response){
    const userid = res.locals.userId;
    const data = req.body;
    console.log(data, userid);

    try{
        if(data.school || data.studentsnumber){
            const schoolBooking = await bookingService.createSchoolBooking(userid, data.dayid, data.school, data.studentsnumber)

            return res.status(httpStatus.OK).send(schoolBooking);
        }else{
            const individualBooking = await bookingService.createIndividualBooking(userid, data.dayid)

            return res.status(httpStatus.OK).send(individualBooking);
        }
    } catch(error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function getReservation(req:Request, res:Response){
    const userid = res.locals.userId;

    try{
        const userBooking = await bookingService.getBooking(userid)

        if(!userBooking){
            res.status(httpStatus.OK).send(null);
        }

        return res.status(httpStatus.OK).send(userBooking);
    } catch(error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}