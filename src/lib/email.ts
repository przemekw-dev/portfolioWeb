import emailjs, { send } from "@emailjs/browser";
import { useState } from "react";

export async function sendEmail(
  name: string,
  email: string,
  message: string
): Promise<boolean> {
  const [isRateLimited, setIsRateLimited] = useState(false);

  return new Promise(async (resolve, reject) => {
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((result) => {
        const data = result.text();

        if (result.status === 429) {
          setIsRateLimited(true);
          setTimeout(() => setIsRateLimited(false), 60000); // Hide after 1 minute
          return;
        }

        console.log(
          `[sendEmail.helper] ${new Date().toISOString()} Result of POST to API route: ${result}: ${JSON.stringify(
            result
          )}: ${data}: ${JSON.stringify(data)}: `
        );

        resolve(true);
      })
      .catch((err) => {
        console.warn(
          `[sendEmail.helper] ${new Date().toISOString()} Error sending POST to API route: ${err}`
        );
        reject(false);
      });
  });
}
