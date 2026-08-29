import { z } from 'zod';

export const serverEnvSchema = z.object({
  DATABASE_URL: z.string().url(),
  AUTH_SECRET: z.string().min(1),
  AUTH_URL: z.string().url().optional(), // Optional since it might be auto-set in some environments
  R2_ACCOUNT_ID: z.string().min(1).optional(),
  R2_ACCESS_KEY_ID: z.string().min(1).optional(),
  R2_SECRET_ACCESS_KEY: z.string().min(1).optional(),
  R2_BUCKET_NAME: z.string().min(1).optional(),
  R2_PUBLIC_URL: z.string().url().optional(),
  RESEND_API_KEY: z.string().min(1).optional(),
  RESEND_FROM_EMAIL: z.string().email().optional(),
  ADMIN_EMAIL: z.string().email().optional(),
  SEED_ADMIN_EMAIL: z.string().email().optional(),
  SEED_ADMIN_PASSWORD: z.string().min(6).optional(),
  SEED_ADMIN_NAME: z.string().min(1).optional(),
});

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_WEBSITE_URL: z.string().url(),
  NEXT_PUBLIC_LEARNING_URL: z.string().url(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;
export type ClientEnv = z.infer<typeof clientEnvSchema>;

function parseEnv() {
  const isServer = typeof window === 'undefined';
  
  const clientParsed = clientEnvSchema.safeParse({
    NEXT_PUBLIC_WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
    NEXT_PUBLIC_LEARNING_URL: process.env.NEXT_PUBLIC_LEARNING_URL,
  });

  if (!clientParsed.success) {
    console.error('❌ Invalid client environment variables:', clientParsed.error.flatten().fieldErrors);
    throw new Error('Invalid client environment variables');
  }

  let serverParsed: { success: true; data: ServerEnv } | { success: false; error: any } = { success: true, data: {} as ServerEnv };

  if (isServer) {
    serverParsed = serverEnvSchema.safeParse(process.env);
    if (!serverParsed.success) {
      console.error('❌ Invalid server environment variables:', serverParsed.error.flatten().fieldErrors);
      throw new Error('Invalid server environment variables');
    }
  }

  return {
    clientEnv: clientParsed.data,
    serverEnv: isServer ? (serverParsed as any).data as ServerEnv : {} as ServerEnv,
  };
}

const { clientEnv, serverEnv } = parseEnv();

export { clientEnv, serverEnv };
