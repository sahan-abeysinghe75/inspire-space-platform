import { Resend } from 'resend';

let resendClient: Resend | null = null;

function getClient(): Resend {
  if (!resendClient) {
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY is not defined. Email sending will likely fail.');
    }
    resendClient = new Resend(process.env.RESEND_API_KEY || 'dummy_key');
  }
  return resendClient;
}

export type EmailResult = { success: boolean; id?: string; error?: string };

const darkThemeHtml = (content: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0d1117; color: #c9d1d9; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background-color: #161b22; padding: 30px; border-radius: 8px; border: 1px solid #30363d; box-shadow: 0 4px 12px rgba(0,0,0,0.5); }
    h2 { color: #4f7fff; margin-top: 0; }
    .label { font-weight: bold; color: #8b949e; }
    .value { margin-bottom: 15px; color: #e6edf3; }
    .footer { margin-top: 30px; font-size: 12px; color: #8b949e; text-align: center; border-top: 1px solid #30363d; padding-top: 15px; }
    .button { display: inline-block; padding: 10px 20px; background-color: #4f7fff; color: #ffffff !important; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    ${content}
    <div class="footer">
      &copy; ${new Date().getFullYear()} Astro Digital Platform. Space theme initialized.
    </div>
  </div>
</body>
</html>
`;

export async function sendEventRequestNotification(data: {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  description: string;
  requestId: string;
}): Promise<EmailResult> {
  try {
    const to = process.env.ADMIN_EMAIL;
    const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    
    if (!to) {
      throw new Error('ADMIN_EMAIL is not configured');
    }

    const content = `
      <h2>New Event Request</h2>
      <p>A new event request has been submitted by <strong>\${data.organization}</strong>.</p>
      
      <div class="label">Organization:</div>
      <div class="value">\${data.organization}</div>
      
      <div class="label">Contact Name:</div>
      <div class="value">\${data.contactName}</div>
      
      <div class="label">Email:</div>
      <div class="value">\${data.email}</div>
      
      <div class="label">Phone:</div>
      <div class="value">\${data.phone || 'N/A'}</div>
      
      <div class="label">Event Date:</div>
      <div class="value">\${data.eventDate}</div>
      
      <div class="label">Event Type:</div>
      <div class="value">\${data.eventType}</div>
      
      <div class="label">Description:</div>
      <div class="value" style="white-space: pre-wrap;">\${data.description}</div>
      
      <div class="label">Request ID:</div>
      <div class="value" style="font-family: monospace;">\${data.requestId}</div>
    `;

    const { data: response, error } = await getClient().emails.send({
      from,
      to,
      subject: \`New Event Request — \${data.organization}\`,
      html: darkThemeHtml(content),
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, id: response?.id };
  } catch (err: any) {
    console.error('Error sending event request notification:', err);
    return { success: false, error: err.message };
  }
}

export async function sendEmailVerification(
  to: string,
  name: string,
  verificationUrl: string
): Promise<EmailResult> {
  try {
    const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    
    const content = `
      <h2>Verify your email address</h2>
      <p>Hello \${name},</p>
      <p>Welcome to Astro Digital Platform! Please verify your email address to get started.</p>
      <a href="\${verificationUrl}" class="button">Verify Email</a>
      <p style="margin-top: 20px; font-size: 14px; color: #8b949e;">If the button doesn't work, copy and paste this link into your browser:<br/>
      <a href="\${verificationUrl}" style="color: #4f7fff;">\${verificationUrl}</a></p>
    `;

    const { data: response, error } = await getClient().emails.send({
      from,
      to,
      subject: 'Verify your email — Astro Digital Platform',
      html: darkThemeHtml(content),
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, id: response?.id };
  } catch (err: any) {
    console.error('Error sending email verification:', err);
    return { success: false, error: err.message };
  }
}
