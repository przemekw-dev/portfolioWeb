"use server";

import { EmailType } from "./../../../types/email";
import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

const emjsKey = process.env.EMAILJS_KEY;
const pubKey = process.env.PUBLIC_KEY;
const privKey = process.env.PRIVATE_KEY;
const srvKey = process.env.SERVICE_ID;
const tmlKey = process.env.TEMPLATE_ID;

// Corrected environment variable check
if (!emjsKey || !srvKey || !tmlKey) {
  throw new Error("EMAILJS_KEY, SERVICE_ID or TEMPLATE_ID are not defined");
}

async function sendEmail(email: EmailType): Promise<Response> {
  console.log(
    `[SendEmailRoute] Sbj:${email.subject}, Msg:${email.message}, Nm:${email.name}`
  );

  try {
    const params = {
      subject: email.subject,
      name: email.name,
      message: email.message,
    };

    emailjs.init({
      publicKey: process.env.PUBLIC_KEY,
      privateKey: process.env.PRIVATE_KEY,
      limitRate: {
        throttle: 8000,
      },
    });

    console.log("PUBLICK KEY: ", pubKey);
    const response = await emailjs.send(srvKey!, tmlKey!, params);
    console.log("SUCCESS!", response.status, response.text);

    return NextResponse.json(
      {
        status: response.status,
        message: response.text,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Failed to send email:", err);
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data: EmailType = await req.json();
    console.debug("[Dt] Data:", data);

    // Actually call the function with await
    return await sendEmail(data);
  } catch (err) {
    console.error("[Dt] Error parsing request:", err);
    return NextResponse.json(
      {
        error: "Invalid request data",
      },
      { status: 400 }
    );
  }
}
