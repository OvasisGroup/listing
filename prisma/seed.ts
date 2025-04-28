import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // First, find or create required foreign keys
  const user = await prisma.user.findFirst(); // assuming at least 1 user exists
  const category = await prisma.category.findFirst();
  const subCategory = await prisma.subCategory.findFirst();

  if (!user || !category || !subCategory) {
    throw new Error('Missing User, Category, or SubCategory for Listing seeding.');
  }

  // Now create Listings
  await prisma.listing.createMany({
    data: [
      {
        title: 'Build a portfolio website',
        description: 'Need a frontend developer to build a portfolio website with animations.',
        budget: 500,
        userId: user.id,
        subCategoryId: subCategory.id,
        location: 'New York, USA',
        status: 'active',
        isFeatured: true,
        isPremium: false,
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 30)), // 30 days from now
      },
      {
        title: 'Mobile app for online store',
        description: 'Create a Flutter app for our e-commerce store.',
        budget: 3000,
        userId: user.id,
        subCategoryId: subCategory.id,
        location: 'Remote',
        status: 'active',
        isFeatured: false,
        isPremium: true,
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 60)),
      },
    ],
  });

  console.log('Listings seeded successfully!');
}

main()
  .catch((e) => {
    console.error('Error while seeding', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
