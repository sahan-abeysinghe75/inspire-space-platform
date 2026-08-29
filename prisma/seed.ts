import { PrismaClient, Role } from '@prisma/client'
import bcrypt from 'bcryptjs'

const db = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  const email = process.env.SEED_ADMIN_EMAIL ?? 'admin@astro.lk'
  const password = process.env.SEED_ADMIN_PASSWORD ?? 'ChangeMe@2025!'
  const name = process.env.SEED_ADMIN_NAME ?? 'Platform Admin'

  // ── Super Admin ──────────────────────────────────────────────────────────
  const existing = await db.user.findUnique({ where: { email } })

  if (!existing) {
    const hashedPassword = await bcrypt.hash(password, 12)

    await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: Role.SUPER_ADMIN,
        emailVerified: new Date(),
      },
    })

    console.log(`✅ Super Admin created: ${email}`)
  } else {
    console.log(`⚠️  Super Admin already exists: ${email}`)
  }

  // ── Default Site Pages ───────────────────────────────────────────────────
  const pages = [
    {
      key: 'home',
      titleEn: 'Home',
      titleSi: 'මුල් පිටුව',
      contentEn: { hero: { headingEn: 'Explore the Universe', subheadingEn: '' } },
      contentSi: { hero: { headingSi: 'විශ්වය ගවේෂණය කරන්න', subheadingSi: '' } },
    },
    {
      key: 'about',
      titleEn: 'About Us',
      titleSi: 'අප ගැන',
      contentEn: {},
      contentSi: {},
    },
    {
      key: 'services',
      titleEn: 'Services',
      titleSi: 'සේවාවන්',
      contentEn: {},
      contentSi: {},
    },
    {
      key: 'contact',
      titleEn: 'Contact',
      titleSi: 'අප හා සම්බන්ධ වන්න',
      contentEn: {},
      contentSi: {},
    },
  ]

  for (const page of pages) {
    await db.sitePage.upsert({
      where: { key: page.key },
      update: {},
      create: page,
    })
  }

  console.log(`✅ Default site pages seeded`)
  console.log('🚀 Seeding complete!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
