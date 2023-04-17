import { prisma } from "@/config";

async function fetchDates() {
    return prisma.excursionDays.findMany();
}

async function createBookingIndividual(dateId:number, userId:number) {
    return prisma.bookings.create({
        data:{
            userId: userId,
            dateId: dateId,
            bookingType:"individual"
        }
    })
}

async function createBookingSchool(dateId:number, userId:number, schoolName: string, studentsnumber:number ) {
    return prisma.bookings.create({
        data:{
            userId: userId,
            dateId: dateId,
            bookingType:"school",
            schoolName: schoolName,
            studentsNumber: studentsnumber
        }
    })
}

async function invalidateDay(dateId:number){
    return prisma.excursionDays.update({
        where:{
            id:dateId
        },
        data:{
            available: false,
        }
    });
}

async function fetchUserBooking(userId:number) {
    return prisma.bookings.findFirst({
        where:{
            userId: userId,
        },
        include:{
            ExcursionDays: true,
        }
    })
}

const bookingRepository = {
    fetchDates,
    createBookingIndividual,
    createBookingSchool,
    invalidateDay,
    fetchUserBooking
}

export default bookingRepository;