// app/api/chat/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();

  // Mock logic
  let responseText = "Sorry, I didn’t understand that.";

  if (message.toLowerCase().includes("sell")) {
    responseText = "You can sell a license by submitting the form on our homepage. We’ll handle the rest!";
  } else if (message.toLowerCase().includes("secure")) {
    responseText = "Yes, SoftSell uses secure escrow and license validation to protect your transactions.";
  } else if (message.toLowerCase().includes("types")) {
    responseText = "We support software, enterprise, and cloud licenses.";
  }

  return NextResponse.json({ text: responseText });
}
