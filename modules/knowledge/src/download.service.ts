import { db } from '@astro/database';

export async function getPublishedDownloads(page = 1, limit = 10, fileType?: string) {
  const skip = (page - 1) * limit;
  const where: any = { status: 'PUBLISHED' };
  
  if (fileType) {
    where.fileType = fileType;
  }

  const [downloads, total] = await Promise.all([
    db.download.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' }
    }),
    db.download.count({ where })
  ]);

  return { downloads, total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function getAllDownloads(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const [downloads, total] = await Promise.all([
    db.download.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' }
    }),
    db.download.count()
  ]);
  return { downloads, total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function createDownload(data: any) {
  return db.download.create({
    data
  });
}

export async function updateDownload(id: string, data: any) {
  return db.download.update({
    where: { id },
    data
  });
}

export async function deleteDownload(id: string) {
  return db.download.delete({
    where: { id }
  });
}
