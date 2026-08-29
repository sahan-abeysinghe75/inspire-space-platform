# Inspire Space Platform 🚀

Welcome to the **Inspire Space Digital Ecosystem** monorepo! This platform drives STEM education across Sri Lanka through two premier initiatives:
- **Inspire Astro**: Advancing astronomy and space sciences.
- **Inspire Tech**: Empowering students with coding, robotics, and future technologies.

## 🛠️ Tech Stack
This project is built using modern, highly scalable web technologies:
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack.
- **Language**: TypeScript.
- **Styling**: Tailwind CSS & Framer Motion.
- **Database**: PostgreSQL (managed via Prisma ORM).
- **Authentication**: Next-Auth (Auth.js v5).
- **Storage**: Cloudflare R2 (S3 compatible) for images and documents.
- **Internationalization**: `next-intl` (Fully bilingual in English & Sinhala).

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v20 or higher)
- pnpm (`npm install -g pnpm`)
- Docker (for running the local database)

### 2. Installation
Clone the repository and install all monorepo dependencies:
```bash
git clone https://github.com/sahan-abeysinghe75/inspire-space-platform.git
cd inspire-space-platform
pnpm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and copy the contents of `.env.example`. 
You will need to fill in your secure credentials (e.g., Auth Secret, Resend API key, Cloudflare R2 keys).

### 4. Database Setup
Start the local PostgreSQL database using Docker, then run Prisma migrations to build the schema:
```bash
docker compose up -d
pnpm run db:push
pnpm run db:seed
```

### 5. Running the Development Server
Start the Turborepo development server:
```bash
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## ☁️ Deployment (Vercel)
This project is fully optimized for **Vercel**:
1. Connect your GitHub repository to Vercel.
2. Ensure the framework preset is set to **Next.js**.
3. Add all your `.env` variables into the Vercel project settings.
4. Deploy! Vercel will automatically handle the Turborepo build, Static Site Generation (SSG), and Edge network distribution.
