import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl as getS3SignedUrl } from '@aws-sdk/s3-request-presigner';

let s3Client: S3Client | null = null;

function getClient(): S3Client {
  if (!s3Client) {
    const accountId = process.env.R2_ACCOUNT_ID;
    const accessKeyId = process.env.R2_ACCESS_KEY_ID;
    const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

    if (!accountId || !accessKeyId || !secretAccessKey) {
      console.warn('R2 credentials not fully configured. Storage operations will likely fail.');
    }

    s3Client = new S3Client({
      region: 'auto',
      endpoint: `https://\${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: accessKeyId || 'dummy',
        secretAccessKey: secretAccessKey || 'dummy',
      },
    });
  }
  return s3Client;
}

const getBucketName = () => process.env.R2_BUCKET_NAME || 'astro-storage';
const getPublicUrlBase = () => (process.env.R2_PUBLIC_URL || '').replace(/\/$/, '');

export type StorageResult = { success: boolean; key?: string; url?: string; error?: string };

export async function uploadFile(key: string, body: Buffer | Uint8Array, contentType: string): Promise<StorageResult> {
  try {
    const command = new PutObjectCommand({
      Bucket: getBucketName(),
      Key: key,
      Body: body,
      ContentType: contentType,
    });

    await getClient().send(command);

    return {
      success: true,
      key,
      url: getPublicUrl(key),
    };
  } catch (error: any) {
    console.error('Error uploading file to R2:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteFile(key: string): Promise<StorageResult> {
  try {
    const command = new DeleteObjectCommand({
      Bucket: getBucketName(),
      Key: key,
    });

    await getClient().send(command);

    return { success: true, key };
  } catch (error: any) {
    console.error('Error deleting file from R2:', error);
    return { success: false, error: error.message };
  }
}

export async function getSignedUrl(key: string, expiresIn: number = 3600): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: getBucketName(),
    Key: key,
  });

  return getS3SignedUrl(getClient(), command, { expiresIn });
}

export function getPublicUrl(key: string): string {
  const base = getPublicUrlBase();
  return base ? `\${base}/\${key}` : key;
}

export function generateKey(folder: string, filename: string): string {
  const sanitized = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
  return `\${folder}/\${Date.now()}-\${sanitized}`;
}
