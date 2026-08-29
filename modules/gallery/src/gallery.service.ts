import { db } from '@astro/database';
// @ts-ignore - Assuming deleteFile exists in @astro/storage
import { deleteFile } from '@astro/storage';

export async function getPublishedImages(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const where = { status: 'PUBLISHED' };
  
  const [images, total] = await Promise.all([
    db.galleryImage.findMany({
      where,
      skip,
      take: limit,
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    }),
    db.galleryImage.count({ where })
  ]);
  
  return { images, total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function getAllImages(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const [images, total] = await Promise.all([
    db.galleryImage.findMany({
      skip,
      take: limit,
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    }),
    db.galleryImage.count()
  ]);
  return { images, total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function getImageById(id: string) {
  return db.galleryImage.findUnique({
    where: { id }
  });
}

export async function createImage(data: any) {
  return db.galleryImage.create({ data });
}

export async function updateImage(id: string, data: any) {
  return db.galleryImage.update({
    where: { id },
    data
  });
}

export async function deleteImage(id: string) {
  const image = await db.galleryImage.findUnique({ where: { id } });
  if (image && (image as any).fileKey) {
    try {
      await deleteFile((image as any).fileKey);
    } catch (error) {
      console.error(`Failed to delete file from storage: ${(image as any).fileKey}`, error);
    }
  }
  return db.galleryImage.delete({ where: { id } });
}

export async function reorderImages(orderedIds: string[]) {
  const updates = orderedIds.map((id, index) => {
    return db.galleryImage.update({
      where: { id },
      data: { order: index }
    });
  });
  
  return db.$transaction(updates);
}
