import { db } from '@astro/database';

export async function getPublishedFaqs() {
  return db.faq.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { order: 'asc' }
  });
}

export async function getAllFaqs() {
  return db.faq.findMany({
    orderBy: { order: 'asc' }
  });
}

export async function createFaq(data: any) {
  return db.faq.create({
    data
  });
}

export async function updateFaq(id: string, data: any) {
  return db.faq.update({
    where: { id },
    data
  });
}

export async function deleteFaq(id: string) {
  return db.faq.delete({
    where: { id }
  });
}

export async function reorderFaqs(orderedIds: string[]) {
  const updates = orderedIds.map((id, index) => {
    return db.faq.update({
      where: { id },
      data: { order: index }
    });
  });
  
  return db.$transaction(updates);
}
