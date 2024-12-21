import { NextResponse } from 'next/server';

import { transporter } from "@/shared/lib/mailerTransporter"
import { ERROR } from '@/shared/utils/consts';

export async function POST(request: Request) {
  try {
    const {name, email, slug} = await request.json();
    if (!name || !email || !slug) {
      return new NextResponse(ERROR.CUSTOM.CAN_NOT_SEND_EMAIL, { status: 500 });
    }

    const link = `${process.env.NEXT_APP_HOST}/activate/${slug}`;

    const mailOptions = {
      from: process.env.NEXT_MAILER_TRANSPORT_AUTH_USER,
      to: email,
      subject: "Notes app",
      text: "Activate notes account",
      html: `
        <h1>Hi, ${name}</h1>
        <p>Activate account by click on link:</p>
        <a href="${link}" target="_blank" >activate</a>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ok: true});
  } catch (e) {
    return new NextResponse(
      ERROR.SERVER.INTERNAL_ERROR,
      { status: 500, statusText: ERROR.SERVER.INTERNAL_ERROR }
    );
  }
}