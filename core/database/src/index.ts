import { PrismaClient } from '@prisma/client'

// ─── Singleton Prisma Client ──────────────────────────────────────────────────
// Prevents multiple Prisma client instances in development (hot reload)

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db
}

// ─── Re-export Prisma types ───────────────────────────────────────────────────

export {
  type User,
  type Account,
  type Session,
  type Article,
  type SkyGuide,
  type Download,
  type Faq,
  type GalleryImage,
  type EventRequest,
  type SitePage,
  Role,
  EventRequestStatus,
  ContentStatus,
  DownloadType,
  ArticleCategory,
} from '@prisma/client'

export type { PrismaClient } from '@prisma/client'
