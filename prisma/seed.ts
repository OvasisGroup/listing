import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.categories.createMany({
    data: [
      { name: 'Automobile Services' },
      { name: 'TukTuk Services' },
      { name: 'Handyman Services' },
      { name: 'Boda Boda Services' },
    ],
    skipDuplicates: true,
  });
}

main().finally(() => prisma.$disconnect());
