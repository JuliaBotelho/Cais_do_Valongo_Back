import bookingRepository from "@/repositories/booking-repository";
import { error } from "console";

async function fetchVisitsDays() {
    const visitsDates = await bookingRepository.fetchDates();

    if(!visitsDates){
        throw error('Não foi possível carregar as datas');
    }
    return visitsDates;
}

async function checkValidBooking(dateId: number) {}

async function getBooking(userId: number) {
    const userBooking = await bookingRepository.fetchUserBooking(userId)

    return userBooking;
}

async function createIndividualBooking(userId:number, dateId: number) {
    const individualBooking = await bookingRepository.createBookingIndividual(dateId, userId)
    
    return individualBooking;
}

async function createSchoolBooking(userId:number, dateId: number, schoolName: string, studentsnumber:number) {
    const schoolBooking = await bookingRepository.createBookingSchool(dateId, userId, schoolName, studentsnumber)

    await bookingRepository.invalidateDay(dateId);

    return schoolBooking
}

const bookingService = {
    getBooking,
    createIndividualBooking,
    createSchoolBooking,
    fetchVisitsDays
};

export default bookingService