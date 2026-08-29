import { db } from '@astro/database';
// @ts-ignore - Assuming sendEmail exists in @astro/mail
import { sendEmail } from '@astro/mail';

export async function createEventRequest(data: any) {
  const request = await db.eventRequest.create({
    data
  });

  try {
    await sendEmail({
      to: data.email,
      subject: 'Event Request Received',
      body: 'We have received your event request. Our team will review it and get back to you.'
    });
  } catch (error) {
    console.error('Failed to send notification email', error);
  }

  return request;
}

export async function getEventRequests(page = 1, limit = 10, status?: string) {
  const skip = (page - 1) * limit;
  const where = status ? { status } : {};
  
  const [requests, total] = await Promise.all([
    db.eventRequest.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' }
    }),
    db.eventRequest.count({ where })
  ]);
  
  return { requests, total, page, limit, totalPages: Math.ceil(total / limit) };
}

export async function getEventRequestById(id: string) {
  return db.eventRequest.findUnique({
    where: { id }
  });
}

export async function updateEventRequestStatus(id: string, status: string, adminNotes?: string) {
  return db.eventRequest.update({
    where: { id },
    data: {
      status,
      adminNotes
    }
  });
}

export async function getEventRequestStats() {
  const stats = await db.eventRequest.groupBy({
    by: ['status'],
    _count: {
      status: true
    }
  });
  
  return stats.reduce((acc: Record<string, number>, curr: any) => {
    acc[curr.status] = curr._count.status;
    return acc;
  }, {} as Record<string, number>);
}
