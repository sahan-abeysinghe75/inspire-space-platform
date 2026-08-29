import { db } from '@astro/database';

export async function getPageContent(key: string) {
  return db.page.findUnique({
    where: { key }
  });
}

export async function updatePageContent(key: string, data: any) {
  return db.page.upsert({
    where: { key },
    update: data,
    create: {
      key,
      ...data
    }
  });
}

export async function getAllPages() {
  return db.page.findMany({
    orderBy: { key: 'asc' }
  });
}
