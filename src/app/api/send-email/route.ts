"use server";

import { safeParse } from "./../../../../node_modules/zod/src/v4/classic/parse";
import {
  string,
  email,
} from "./../../../../node_modules/zod/src/v4/core/regexes";

import { EmailType } from "./../../../types/email";
import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";
import { z } from "zod";
import { da } from "zod/v4/locales";
import { ratelimit } from "lib/rateLimiter";

const requiredVars = [
  "EMAILJS_KEY",
  "SERVICE_ID",
  "TEMPLATE_ID",
  "PUBLIC_KEY",
  "PRIVATE_KEY",
];

for (const endVar of requiredVars) {
  if (!process.env[endVar]) {
    throw new Error(`Error validating env vars.`);
  }
}

const emjsKey = process.env.EMAILJS_KEY!;
const srvKey = process.env.SERVICE_ID;
const tmlKey = process.env.TEMPLATE_ID;

// Corrected environment variable check
if (!emjsKey || !srvKey || !tmlKey) {
  throw new Error("EMAILJS_KEY, SERVICE_ID or TEMPLATE_ID are not defined");
}

emailjs.init({
  publicKey: process.env.PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  limitRate: {
    throttle: 8000,
  },
});

const EmailSchema = z.object({
  name: z.string().max(40),
  email: z.string().max(100),
  message: z.string().max(1000),
});

async function sendEmail(email: EmailType): Promise<Response> {
  // !! REMOVE
  console.log(
    `[SendEmailRoute] Sbj:${email.subject}, Msg:${email.message}, Nm:${email.name}`
  );

  try {
    const validated = EmailSchema.safeParse(email);
    if (!validated) {
      return NextResponse.json(
        {
          error: "Invalid input data",
        },
        {
          status: 400,
        }
      );
    }
    const params = {
      name: validated.data?.name,
      email: validated.data?.email,
      message: validated.data?.message,
    };

    const response = await emailjs.send(
      process.env.SERVICE_ID!,
      process.env.TEMPLATE_ID!,
      params,
      {
        limitRate: {
          throttle: 8000,
        },
      }
    );

    // !!! REMOVE
    console.log("SUCCESS!", response.status, response.text);

    console.log("ROUTE Email sent successfully");

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
  if (req.headers.get("content-type") !== "application/json") {
    return NextResponse.json(
      {
        error: "Unsupported media type",
      },
      {
        status: 415,
      }
    );
  }

  const identifier = req.headers.get("x-forwarded-for") || "127.0.0.1";

  const { success } = await ratelimit.limit(identifier);

  if (!success) {
    return NextResponse.json({ error: "Too Many Requests" }, { status: 429 });
  }

  try {
    const data: EmailType = await req.json();
    console.debug("[Dt] Data:", data);

    // Actually call the function with await
    return await sendEmail(data as EmailType);
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

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://przemek-portfolio.vercel.app/"
  );
  response.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
