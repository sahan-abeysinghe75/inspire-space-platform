import { db } from '@astro/database';
import slugify from 'slugify';
import type { Prisma } from '@astro/database';

export function generateSlug(title: string): string {
  return slugify(title, { lower: true, strict: true });
}

export async function getPublishedArticles(page = 1, limit = 10, categoryId?: string) {
  const skip = (page - 1) * limit;
  const where: any = { status: 'PUBLISHED' };
  
  if (categoryId) {
    where.categoryId = categoryId;
  }

  const [articles, total] = await Promise.all([
    db.article.findMany({
      where,
      skip,
      take: limit,
      orderBy: { publishedAt: 'desc' },
      include: { category: true, author: true }
    }),
    db.article.count({ where })
  ]);

  return { articles, total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function getArticleBySlug(slug: string) {
  return db.article.findUnique({
    where: { slug },
    include: { category: true, author: true }
  });
}

export async function getAllArticles(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const [articles, total] = await Promise.all([
    db.article.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: { category: true, author: true }
    }),
    db.article.count()
  ]);
  return { articles, total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function getArticleById(id: string) {
  return db.article.findUnique({
    where: { id },
    include: { category: true, author: true }
  });
}

export async function createArticle(data: any) {
  const slug = generateSlug(data.titleEn);
  const publishedAt = data.status === 'PUBLISHED' ? new Date() : null;
  return db.article.create({
    data: {
      ...data,
      slug,
      publishedAt
    }
  });
}

export async function updateArticle(id: string, data: any) {
  const updateData = { ...data };
  if (data.titleEn && !data.slug) {
    updateData.slug = generateSlug(data.titleEn);
  }
  if (data.status === 'PUBLISHED') {
    const existing = await db.article.findUnique({ where: { id } });
    if (existing && !existing.publishedAt) {
      updateData.publishedAt = new Date();
    }
  }
  return db.article.update({
    where: { id },
    data: updateData
  });
}

export async function deleteArticle(id: string) {
  return db.article.delete({
    where: { id }
  });
}

export async function publishArticle(id: string) {
  return db.article.update({
    where: { id },
    data: { status: 'PUBLISHED', publishedAt: new Date() }
  });
}

export async function unpublishArticle(id: string) {
  return db.article.update({
    where: { id },
    data: { status: 'DRAFT', publishedAt: null }
  });
}
