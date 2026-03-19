
const { prisma } = require('./lib/prisma');

async function test() {
    try {
        console.log("Testing database connection...");
        const count = await prisma.users.count();
        console.log("Connection successful. User count:", count);
        process.exit(0);
    } catch (error) {
        console.error("Connection failed:", error);
        process.exit(1);
    }
}

test();
