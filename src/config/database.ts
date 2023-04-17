import { PrismaClient } from "@prisma/client";

export let prisma: PrismaClient;
export function connectDb(): void{
    prisma = new PrismaClient();
}

export async function disconnectDb() : Promise<void> {
    await prisma?.$disconnect();
}

/* 
CREATE TABLE "Users" (id SERIAL PRIMARY KEY,"userName" VARCHAR(50) NOT NULL,email TEXT NOT NULL UNIQUE,password TEXT NOT NULL,token TEXT,"createdAt" DATE NOT NULL DEFAULT NOW());
 */

/* 
CREATE TABLE "GeoInfos" (id SERIAL PRIMARY KEY,title VARCHAR(50) NOT NULL,description TEXT NOT NULL ,image TEXT NOT NULL,"createdAt" DATE NOT NULL DEFAULT NOW());
 */

/* 
CREATE TABLE "HistInfos" (id SERIAL PRIMARY KEY,title VARCHAR(50) NOT NULL,description TEXT NOT NULL ,image TEXT NOT NULL,"createdAt" DATE NOT NULL DEFAULT NOW());
 */

/* 
CREATE TABLE "ExcursionDays" (id SERIAL PRIMARY KEY,day DATE NOT NULL,capacity INTEGER NOT NULL ,hour TIME NOT NULL, available BOOLEAN DEFAULT true,"createdAt" DATE NOT NULL DEFAULT NOW());
 */

/* 
CREATE TABLE "Bookings"(id SERIAL PRIMARY KEY,"userId" INTEGER REFERENCES "Users"("id"), "dateId" INTEGER REFERENCES "ExcursionDays"("id"), "bookingType" TEXT NOT NULL, "schoolName" TEXT, "studentsNumber" INTERGER, "createdAt" DATE NOT NULL DEFAULT NOW());
 */

/* 
INSERT INTO "ExcursionDays" (id , day, capacity, hour) VALUES (1, '2023-04-19', 25, '10:00:00');
 */

/* 
INSERT INTO "ExcursionDays" (id , day, capacity, hour) VALUES (2, '2023-04-20', 25, '10:00:00');
 */

/* 
INSERT INTO "ExcursionDays" (id , day, capacity, hour) VALUES (3, '2023-04-21', 25, '11:00:00');
 */

/* 
INSERT INTO "ExcursionDays" (id , day, capacity, hour) VALUES (4, '2023-04-22', 25, '11:00:00');
 */

/* 
INSERT INTO "ExcursionDays" (id , day, capacity, hour) VALUES (5, '2023-04-23', 25, '12:00:00');
 */