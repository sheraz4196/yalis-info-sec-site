"use server";
import nodemailer from "nodemailer";
const NEXT_PUBLIC_SMTP_HOST = process.env.NEXT_PUBLIC_SMTP_HOST;
const NEXT_PUBLIC_SENDER_EMAIL_PASSWORD =
  process.env.NEXT_PUBLIC_SENDER_EMAIL_PASSWORD;
const NEXT_PUBLIC_RECIPIENT_EMAIL = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL;
const NEXT_PUBLIC_SENDER_EMAIL = process.env.NEXT_PUBLIC_SENDER_EMAIL;
const NEXT_PUBLIC_FROM_EMAIL = process.env.NEXT_PUBLIC_FROM_EMAIL;

const transporter = nodemailer.createTransport({
  host: NEXT_PUBLIC_SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: NEXT_PUBLIC_SENDER_EMAIL,
    pass: NEXT_PUBLIC_SENDER_EMAIL_PASSWORD,
  },
});

export async function sendMail({ subject, text, html, sendTo }) {
  console.log(
    `UserName: ${NEXT_PUBLIC_SENDER_EMAIL}\nPassword:${NEXT_PUBLIC_SENDER_EMAIL_PASSWORD}\nHost: ${NEXT_PUBLIC_SMTP_HOST}`
  );
  try {
    const info = await transporter.sendMail({
      from: NEXT_PUBLIC_FROM_EMAIL,
      to: sendTo || NEXT_PUBLIC_RECIPIENT_EMAIL,
      subject: subject,
      text: text,
      html: html || "",
    });

    console.log("Message Sent", info.messageId);
    console.log("Mail sent to", NEXT_PUBLIC_RECIPIENT_EMAIL);
    return info;
  } catch (error) {
    console.error("Error sending email", error);
  }
}
