import { Router } from "express";
import { Resend } from "resend";
import { z } from "zod";

const router = Router();

const demoRequestSchema = z.object({
  name: z.string().min(2),
  organization: z.string().min(2),
  phone: z.string().min(9),
  email: z.string().email(),
  service: z.string().min(1),
});

router.post("/demo-request", async (req, res) => {
  const parsed = demoRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request data", details: parsed.error.issues });
    return;
  }

  const { name, organization, phone, email, service } = parsed.data;

  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) {
    req.log.error("RESEND_API_KEY is not configured");
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Ramtechnologies Website <demo@ramtechnologies.co.ke>",
    to: ["demo@ramtechnologies.co.ke"],
    replyTo: email,
    subject: `New Demo Request — ${service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc; border-radius: 12px;">
        <div style="background: #0f2557; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Demo Request</h1>
          <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Received from ramtechnologies.co.ke</p>
        </div>
        <div style="background: #ffffff; padding: 24px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px; width: 140px;">Full Name</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Organization</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${organization}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Phone</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 600;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-size: 14px;">Service Interest</td>
              <td style="padding: 12px 0; color: #f97316; font-weight: 600;">${service}</td>
            </tr>
          </table>
        </div>
        <div style="margin-top: 16px; text-align: center;">
          <a href="mailto:${email}" style="display: inline-block; background: #f97316; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
        </div>
        <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 24px;">© 2026 Ramtechnologies. All Rights Reserved.</p>
      </div>
    `,
  });

  if (error) {
    req.log.error({ error }, "Failed to send demo request email");
    res.status(500).json({ error: "Failed to send email" });
    return;
  }

  req.log.info({ name, organization, service }, "Demo request email sent");
  res.status(200).json({ success: true });
});

export default router;
