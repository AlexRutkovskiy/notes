import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: process.env.NEXT_MAILER_TRANSPORT_SERVICE,
  host: process.env.NEXT_MAILER_TRANSPORT_HOST,
  port: parseInt(process.env.NEXT_MAILER_TRANSPORT_PORT as string),
  secure: !!parseInt(process.env.NEXT_MAILER_TRANSPORT_SECURE as string),
  auth: {
    user: process.env.NEXT_MAILER_TRANSPORT_AUTH_USER,
    pass: process.env.NEXT_MAILER_TRANSPORT_AUTH_PASSWORD,
  }
})