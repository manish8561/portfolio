import { NextRequest, NextResponse } from "next/server";
import { CreateEmailOptions, CreateEmailResponse, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL!;

interface SendData {
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  const { email, subject, message }: SendData = await req.json();
  const emailRequest: CreateEmailOptions = {
    from: fromEmail,
    to: ["manish198646@yahoo.com", email],
    subject: subject,
    html: `<h1>Portfolio Eamil: ${subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>${message}</p>`,
  };

  try {
    const data: CreateEmailResponse = await resend.emails.send(emailRequest);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
