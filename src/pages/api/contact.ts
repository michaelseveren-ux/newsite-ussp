import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

// Common headers to prevent caching
const headers = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, must-revalidate',
};

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Email address to receive form submissions
const TO_EMAIL = import.meta.env.CONTACT_EMAIL || 'info@ussportplanes.com';

// Sender email - use verified domain or Resend's default
const FROM_EMAIL = import.meta.env.FROM_EMAIL || 'US Sport Planes <onboarding@resend.dev>';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString() || 'Not provided';
    const subject = formData.get('subject')?.toString();
    const message = formData.get('message')?.toString();

    // Honeypot check - if this field has a value, it's likely spam
    const honeypot = formData.get('_gotcha')?.toString();
    if (honeypot) {
      // Silently accept but don't send (spam bot detected)
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers,
      });
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers }
      );
    }

    // Format subject line based on inquiry type
    const subjectLabels: Record<string, string> = {
      general: 'General Inquiry',
      purchase: 'Aircraft Purchase',
      sale: 'Aircraft Sale',
      training: 'Flight Training',
      service: 'Service Request',
      other: 'Other',
    };
    const subjectLabel = subjectLabels[subject] || subject;

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Website] ${subjectLabel} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subjectLabel}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subjectLabel}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email', details: error.message }),
        { status: 500, headers }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: String(error) }),
      { status: 500, headers }
    );
  }
};
