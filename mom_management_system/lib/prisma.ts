import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/app/generated";

const prismaClientSingleton = () => {
    const adapter = new PrismaMariaDb({
        host: "localhost",
        user: "root",
        password: "Riyabhimani@2005",
        database: "meetingManegment",
        connectionLimit: 10 // Increased from 5 to 10 for better concurrency
    });

    console.log("Initializing new Prisma Client instance...");
    return new PrismaClient({ adapter });
};

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;