import nodemailer from "nodemailer";

type OfferPayload = {
  name: string;
  phone: string;
  email?: string;
  address: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as OfferPayload;
    const name = payload.name?.trim();
    const phone = payload.phone?.trim();
    const email = payload.email?.trim();
    const address = payload.address?.trim();

    if (!name || !phone || !address) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const toEmail = process.env.OFFER_TO_EMAIL;
    if (!toEmail) {
      return Response.json(
        { error: "Missing OFFER_TO_EMAIL configuration." },
        { status: 500 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const fromEmail = process.env.SMTP_FROM || user;

    if (!host || !user || !pass || !fromEmail) {
      return Response.json(
        { error: "SMTP credentials are not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true" || port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"ДомоМениджър" <${fromEmail}>`,
      to: toEmail,
      subject: "Нова заявка за оферта",
      text: [
        `Име: ${name}`,
        `Телефон: ${phone}`,
        `Имейл: ${email || "-"}`,
        `Адрес: ${address}`,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Offer form error:", error);
    return Response.json({ error: "Failed to send offer request." }, { status: 500 });
  }
}
