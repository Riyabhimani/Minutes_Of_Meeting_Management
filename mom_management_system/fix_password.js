
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin1@company.com';
  const user = await prisma.users.findUnique({
    where: { email: email }
  });

  if (user && user.password && !user.password.startsWith('$2')) {
    console.log(`Hashing password for ${email}...`);
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.users.update({
      where: { user_id: user.user_id },
      data: { password: hashedPassword }
    });
    console.log('Password hashed successfully.');
  } else {
    console.log('User not found or password already hashed.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
