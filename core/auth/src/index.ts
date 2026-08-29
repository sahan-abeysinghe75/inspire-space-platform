import type { Session, NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';

export type SessionUser = {
  id: string;
  email: string;
  name?: string;
  role: string;
};

// Extend the built-in session types
declare module 'next-auth' {
  interface Session {
    user: SessionUser;
  }
}

export function createAuthConfig(db: any): NextAuthConfig {
  return {
    adapter: PrismaAdapter(db),
    providers: [
      Credentials({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const user = await db.user.findUnique({
            where: { email: credentials.email as string },
          });

          if (!user || !user.password) {
            return null;
          }

          const isPasswordValid = await comparePassword(
            credentials.password as string,
            user.password
          );

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        },
      }),
    ],
    session: {
      strategy: 'jwt',
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.role = (user as any).role;
          token.id = user.id;
        }
        return token;
      },
      async session({ session, token }) {
        if (session.user) {
          session.user.role = token.role as string;
          session.user.id = token.id as string;
        }
        return session;
      },
    },
    pages: {
      signIn: '/admin/login',
    },
  };
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export type { Session, NextAuthConfig };
