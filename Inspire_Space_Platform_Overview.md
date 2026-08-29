# Inspire Space Digital Ecosystem
## Project Overview (Concept v1.0)

### Executive Summary
Inspire Space is a STEM education organization committed to making science, technology, engineering, mathematics, and astronomy education accessible through modern learning experiences, practical training, research, innovation, and community engagement.

To support this vision, Inspire Space will develop a unified digital ecosystem that serves as the organization's official online presence while providing centralized access to educational programs, online learning, research initiatives, public outreach activities, and community resources.

Rather than maintaining multiple independent websites for different initiatives, Inspire Space will operate one integrated platform where every initiative shares the same infrastructure, learning environment, and administration while maintaining its own unique identity.

---

## 1. Overview
**Inspire Space** is a STEM education company dedicated to empowering learners through innovative educational experiences, practical training, research, and community engagement. The organization serves as the central platform for delivering multidisciplinary STEM education while operating and managing several specialized initiatives under a unified ecosystem.

The Inspire Space digital platform will function as the official website and learning ecosystem for all initiatives operated by Inspire Space. It provides a centralized location where learners, educators, institutions, industry partners, and the public can access educational programs, online learning, events, research, and community resources.

## 2. Domains
### Public Website
- **inspirespacesl.org**
Purpose: Official website · Centralized Programs · Knowledge Center · Gallery · Event Requests · Initiatives Hub

### Learning Platform
- **learn.inspirespacesl.org**
Purpose: Courses · Lessons · Quizzes · Certificates · Student Dashboard · Learning Progress

---

## 3. The Three Initiatives

The unified platform houses three main initiatives, each with its own specialized focus area:

### 1. Inspire Astro (FOADS)
Astronomy, observational astronomy, astrophotography, space sciences, and public outreach. Making the universe accessible to all Sri Lankans.

### 2. Inspire Science
Physics, chemistry, biology, mathematics, environmental science, and scientific literacy through hands-on experiments and STEM activities.

### 3. Inspire Tech
Programming, robotics, artificial intelligence, cybersecurity, cloud computing, IoT, and engineering for the next generation of tech innovators.

---

## 4. Architecture Principles
- **Modular Monolith**
- **Monorepo** (Turborepo)
- **Shared Authentication** (Single Auth.js Instance)
- **Shared Database** (PostgreSQL via Prisma ORM)
- **Shared Storage** (Cloudflare R2)
- **Cloud Native**
- **API-first**
- **Docker-first Development**
- **CI/CD by default**
- **Role-Based Access Control (RBAC)**

---

## 5. High Level Architecture

```text
                   Cloudflare
             DNS • CDN • SSL • WAF
                      │
      ┌───────────────┴────────────────┐
      │                                │
inspirespacesl.org            learn.inspirespacesl.org
      │                                │
      └───────────────┬────────────────┘
                      │
             Shared Next.js Backend
                      │
             Route Handlers / APIs
                      │
               Prisma ORM + Zod
                      │
                 PostgreSQL
                      │
               Cloudflare R2
                      │
                    Resend
                  (Email Service)
```

---

## 6. Authentication & Authorization

### Single Auth.js Instance with RBAC
One authentication system for the entire platform.

**Role Matrix:**
| Role           | Public Website | Learning Platform | Admin CMS        |
| -------------- | -------------- | ----------------- | ---------------- |
| Visitor        | ✅              | ❌                 | ❌                |
| Student        | ✅              | ✅                 | ❌                |
| Instructor     | ✅              | ✅                 | Limited          |
| Content Editor | ✅              | ❌                 | Knowledge only   |
| Administrator  | ✅              | ✅                 | Full             |
| Super Admin    | ✅              | ✅                 | Full + System    |

---

## 7. Admin CMS

The Admin CMS is **not** a separate application. It lives on protected routes inside the main website app.
```text
inspirespacesl.org/admin
│
└── Protected by middleware (Admins and Super Admins only)
```

---

## 8. Repository Structure

```text
astro-platform/
│
├── apps/
│   ├── website/          ← inspirespacesl.org (includes /admin routes)
│   └── learning/         ← learn.inspirespacesl.org
│
├── modules/
│   ├── knowledge/        ← Articles, News, Guides, Downloads, FAQs
│   ├── learning/         ← Courses, Lessons, Quizzes, Progress
│   ├── certificates/     ← Auto-generation, Admin override
│   ├── gallery/          ← Photo Gallery
│   ├── event-request/    ← Event Request CRM
│   └── website/          ← Website-specific domain logic
│
├── core/
│   ├── auth/             ← Auth.js config, RBAC
│   ├── database/         ← Prisma client, migrations
│   ├── permissions/      ← Role definitions, guards
│   ├── logger/           ← Structured logging
│   ├── mail/             ← Resend email service
│   ├── storage/          ← Cloudflare R2 client
│   ├── validation/       ← Shared Zod schemas
│   └── config/           ← Environment, constants
│
├── packages/
│   └── ui/               ← Shared React components
│
├── prisma/               ← Schema, migrations
├── docs/                 ← Documentation
├── docker/               ← Dockerfiles
└── docker-compose.yml
```

---

## 9. Development Phases

**Phase 1 — Public Foundation**
- Public Website (Inspire Space Corporate)
- 3 Initiative Sub-pages (Astro, Science, Tech)
- Knowledge Center
- Gallery
- Contact & Event Requests
- Admin CMS (protected routes)

**Phase 2 — Learning Platform**
- Authentication (Auth.js + RBAC)
- Student Dashboard
- Courses & Lessons
- Quizzes
- Progress Tracking
- Certificates (automatic generation)

**Phase 3 — Growth**
- SEO Optimization
- Merchandise (Inquiry → PayHere)
- Analytics

---

## 10. Design Philosophy
This platform intentionally follows a **Modular Monolith** architecture instead of microservices.

**Reasons:**
- Simpler development and onboarding
- Lower operational cost
- Shared codebase across apps
- Easier testing
- Clear migration path to services when scale demands it
