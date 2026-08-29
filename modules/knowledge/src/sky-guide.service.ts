import { db } from '@astro/database';

export async function getCurrentSkyGuide() {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  return db.skyGuide.findFirst({
    where: {
      month,
      year,
      status: 'PUBLISHED'
    }
  });
}

export async function getSkyGuideByMonthYear(month: number, year: number) {
  return db.skyGuide.findFirst({
    where: { month, year }
  });
}

export async function getAllSkyGuides(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const [guides, total] = await Promise.all([
    db.skyGuide.findMany({
      skip,
      take: limit,
      orderBy: [{ year: 'desc' }, { month: 'desc' }]
    }),
    db.skyGuide.count()
  ]);
  return { guides, total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function createSkyGuide(data: any) {
  return db.skyGuide.create({
    data
  });
}

export async function updateSkyGuide(id: string, data: any) {
  return db.skyGuide.update({
    where: { id },
    data
  });
}

export async function deleteSkyGuide(id: string) {
  return db.skyGuide.delete({
    where: { id }
  });
}
