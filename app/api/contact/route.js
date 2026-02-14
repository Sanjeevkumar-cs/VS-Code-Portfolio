import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const { user_name, user_email, message } = data;

    // --- DEBUGGING: Check if keys are identical or incorrect ---
    const publicK = process.env.EMAILJS_PUBLIC_KEY;
    const privateK = process.env.EMAILJS_PRIVATE_KEY;

    console.log("--- DEBUG START ---");
    console.log(
      "Public Key (first 4 chars):",
      publicK ? publicK.substring(0, 6) : "MISSING",
    );
    console.log(
      "Private Key (first 4 chars):",
      privateK ? privateK.substring(0, 6) : "MISSING",
    );

    if (publicK === privateK) {
      console.error("CRITICAL ERROR: Public Key and Private Key are the same!");
    }
    console.log("--- DEBUG END ---");
    // -----------------------------------------------------------

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          user_name,
          user_email,
          message,
        },
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      throw new Error(errorData);
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("SERVER ERROR:", error.message);
    return NextResponse.json(
      { message: `Failed: ${error.message}` },
      { status: 500 },
    );
  }
}
