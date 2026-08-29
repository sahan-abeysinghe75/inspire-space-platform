import { z } from 'zod';

export const paginationSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export const slugSchema = z.string().min(1).max(200).regex(/^[a-z0-9-]+$/);

export const localeSchema = z.enum(['en', 'si']);

export const contentStatusSchema = z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']);

export const eventRequestStatusSchema = z.enum(['PENDING', 'CONTACTED', 'CONFIRMED', 'COMPLETED', 'CANCELLED']);

export const bilingualContentSchema = z.object({
  en: z.string().min(1),
  si: z.string().min(1),
});

export const createArticleSchema = z.object({
  titleEn: z.string().min(1),
  titleSi: z.string().min(1),
  contentEn: z.string().min(1),
  contentSi: z.string().min(1),
  slug: slugSchema,
  category: z.string().min(1),
  status: contentStatusSchema,
});

export const updateArticleSchema = createArticleSchema.partial();

export const createEventRequestSchema = z.object({
  organization: z.string().min(1),
  contactName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  eventDate: z.string(), // ISO string or simple date
  eventType: z.string().min(1),
  description: z.string().min(1),
});

export const updateEventRequestStatusSchema = z.object({
  status: eventRequestStatusSchema,
  adminNotes: z.string().optional(),
});

export const createGalleryImageSchema = z.object({
  titleEn: z.string().min(1),
  titleSi: z.string().min(1),
  altEn: z.string().min(1),
  altSi: z.string().min(1),
  order: z.number().int().default(0),
  takenAt: z.string().optional(),
});

export const createFaqSchema = z.object({
  questionEn: z.string().min(1),
  questionSi: z.string().min(1),
  answerEn: z.string().min(1),
  answerSi: z.string().min(1),
  order: z.number().int().default(0),
  status: contentStatusSchema,
});

export const createDownloadSchema = z.object({
  titleEn: z.string().min(1),
  titleSi: z.string().min(1),
  descriptionEn: z.string().min(1),
  descriptionSi: z.string().min(1),
  fileType: z.string().min(1),
  status: contentStatusSchema,
});

// Types
export type PaginationInput = z.infer<typeof paginationSchema>;
export type Locale = z.infer<typeof localeSchema>;
export type ContentStatus = z.infer<typeof contentStatusSchema>;
export type EventRequestStatus = z.infer<typeof eventRequestStatusSchema>;
export type BilingualContent = z.infer<typeof bilingualContentSchema>;
export type CreateArticleInput = z.infer<typeof createArticleSchema>;
export type UpdateArticleInput = z.infer<typeof updateArticleSchema>;
export type CreateEventRequestInput = z.infer<typeof createEventRequestSchema>;
export type UpdateEventRequestStatusInput = z.infer<typeof updateEventRequestStatusSchema>;
export type CreateGalleryImageInput = z.infer<typeof createGalleryImageSchema>;
export type CreateFaqInput = z.infer<typeof createFaqSchema>;
export type CreateDownloadInput = z.infer<typeof createDownloadSchema>;
