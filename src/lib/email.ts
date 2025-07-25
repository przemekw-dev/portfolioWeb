// import emailjs, { send } from "@emailjs/browser";
// import { useState } from "react";

export async function sendEmail(
  name: string,
  email: string,
  message: string
): Promise<string> {
  // const [isRateLimited, setIsRateLimited] = useState(false);

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

        if (!result.status) {
          console.warn(
            `[sendEmail.helper] ${new Date().toISOString()} Result status missing.`
          );
          return;
        }

        if (result.status === 429) {
          // setIsRateLimited(true);
          // setTimeout(() => setIsRateLimited(false), 60000); // Hide after 1 minute
          return;
        }

        switch (result.status) {
          case 200:
            resolve("Email sent successfully.");
            break;
          case 400:
            reject("Invalid request. Please check the input fields.");
            break;
          case 429:
            reject("Rate limit exceeded. Try again shortly.");
            break;
          case 500:
            reject("Server error. Please try again later.");
            break;
          default:
            console.warn(
              `[sendEmail.helper] ${new Date().toISOString()} Unknown status: ${
                result.status
              }`
            );
            reject(`Unexpected error (status code: ${result.status}).`);
            break;
        }

        console.log(
          `[sendEmail.helper] ${new Date().toISOString()} Result of POST to API route: ${result}: ${JSON.stringify(
            result
          )}: ${data}: ${JSON.stringify(data)}: `
        );
      })
      .catch((err) => {
        console.warn(
          `[sendEmail.helper] ${new Date().toISOString()} Error sending POST to API route: ${err}`
        );
        reject(false);
      });
  });
}
